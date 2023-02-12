import axios from "axios";
import css from "components/Form/Form.module.css";
import Headline from "components/Headline/Headline";
import Textarea from "components/Textarea/Textarea";
import { useCallback, useState, useEffect } from "react";
import { prefList } from "types";

const Form = () => {
  const [file, setFile] = useState<any>(null);
  const [resultImage, setResultImage] = useState<any>(null);
  const [pref, setPref] = useState<string>("1");

  const changeFileHandler = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      if (evt.currentTarget?.files && evt.currentTarget.files[0]) {
        setFile(evt.currentTarget.files[0]);
      }
    },
    []
  );

  const [url, setUrl] = useState<string>("");
  const isLoading = file && !url;

  useEffect(() => {
    if (!file) {
      return;
    }

    let reader: FileReader | null = new FileReader();
    reader.onloadend = () => {
      const res = reader!.result;
      if (res && typeof res === "string") {
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
    submitData.append("image_file", file);
    /* submitData.append("pref", pref); */
    console.log(pref)
    await axios({
      method: "POST",
      url: "https://maskyohou.onrender.com/send-image",
      data: submitData,
      headers: { "Content-Type": "multipart/form-data", "Access-Control-Allow-Origin": "*" },
    })
      .then((res) => {
        setResultImage(res.data)
        alert("送信が完了しました");
      }
      )
      .catch((e) => alert(`エラーが発生しました\n${e}`));
  };

  return (
    <>
      <form className={css.form}>
        <Headline subject="あなたのまわりのマスク状況を投稿！！" />
        <Textarea text={`ここから　写真を投稿することで　あなたの身の回りのマスク状況を　AIが分析します！\nあなたの周りのマスク状況が　アプリ上に反映されます。`} />
        <div className={css.inputArea}>
          {file ? null : (
            <>
              <div className={css.fileInput}>
                あなたの　まわりの　マスク状況は？
                <input
                  type="file"
                  accept="image/*"
                  onChange={changeFileHandler}
                />
              </div>
            </>
          )}
          {file ? (
            isLoading ? (
              <p>読み込み中</p>
            ) : (
              <>
                <img src={url} alt={file.name} className={css.previewImage} />
                <div className={css.prefInput}>
                  <label>都道府県を選択：</label>
                  <select onChange={(e) => setPref(e.target.value)}>
                    {prefList.map((item, index) => {
                      return <option key={index} value={item.code}>{item.name}</option>;
                    })}
                  </select>
                </div>
              </>
            )
          ) : null}
        </div>
        <input
          className={css.submitButton}
          onClick={submithander}
          type="button"
          value={"送信"}
        />
      </form>
      {resultImage ? <img src={resultImage} /> : null}
    </>
  );
};

export default Form;
