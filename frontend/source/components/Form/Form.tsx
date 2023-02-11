import axios from "axios";
import css from "components/Form/Form.module.css"
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
    const submitData = {
      image_file: file
    }
    await axios.post("https://maskyohou.onrender.com/", submitData)
    .then((res) => console.log(res))
   alert("OK")
  }

  return (
    <form className={css.form} onSubmit={submithander}>
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
            <div className={css.fileInput}>
              あなたの　まわりの　マスク状況は？
              <input type="file" accept="image/*" onChange={changeFileHandler} />

            </div>
            <div className={css.prefInput}>
              <label>都道府県を選択：</label>
              <select>
                {prefList.map((item, index) => {
                  return (
                    <option>{item.name}</option>
                  )
                })}
              </select>

            </div>
          </>
        }
        {file ? (
          isLoading ? (
            <p>読み込み中</p>
          ) : (
            <img src={url} alt={file.name} className={css.previewImage} />
          )) : null}

        <button className={css.submitButton}>送信</button>
      </div>
    </form>
  )
}

export default Form;
