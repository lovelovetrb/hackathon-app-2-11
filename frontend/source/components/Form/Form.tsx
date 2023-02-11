import axios from "axios";
import css from "components/Form/Form.module.css"
import Textarea from "components/Textarea/Textarea";
import { useCallback, useState, useEffect } from "react"
import { prefList } from "types";


const Form = () => {
  const [file, setFile] = useState<File | null>(null)

  const changeFileHandler = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.currentTarget?.files && evt.currentTarget.files[0]) {
      setFile(evt.currentTarget.files[0]);
    }
  }, []);

  const [url, setUrl] = useState<string>('');
  const isLoading = file && !url;

  useEffect(() => {
    if (!file) {
      return;
    }

    let reader: FileReader | null = new FileReader();
    reader.onloadend = () => {
      const res = reader!.result;
      if (res && typeof res === 'string') {
        setUrl(res);
      }
    };
    reader.readAsDataURL(file);

    return () => {
      reader = null;
    };
  }, [file]);

  const submithander = async () => {
    const submitData = new FormData();
    submitData.append('image_file', file)

    await axios({
      method: "POST",
      url: "https://maskyohou.onrender.com/send-image",
      data: submitData,
      headers: { "Content-Type": "multipart/form-data" }
    })
      .then((res) => console.log(res))
    alert("OK")
  }

  return (
    <form className={css.form} >
      <h3 className={css.Headline}>あなたのまわりのマスク状況を投稿！！</h3>
      {/*<Image
        src="/railFrame.png"
        layout="fill"
        objectFit="cover"
        alt=""
      //
      />*/}
      <div className={css.inputArea}>
        {file ? null :
          <>
            <Textarea text="ここに　写真を投稿することで　あなたの身の回りのマスク状況を　反映できます！" />
            <div className={css.fileInput}>
              あなたの　まわりの　マスク状況は？
              <input type="file" accept="image/*" onChange={changeFileHandler} />
            </div>

          </>
        }
        {file ? (
          isLoading ? (
            <p>読み込み中</p>
          ) : (
            <>
              <img src={url} alt={file.name} className={css.previewImage} />
              <div className={css.prefInput}>
                <label>都道府県を選択：</label>
                <select>
                  {prefList.map((item, index) => {
                    return (
                      <option key={index} >{item.name}</option>
                    )
                  })}
                </select>
              </div>
            </>
          )) : null}

      </div>
      <input className={css.submitButton} onClick={submithander} type="button" value={"送信"} />
    </form>
  )
}

export default Form;
