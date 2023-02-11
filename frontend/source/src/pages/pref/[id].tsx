import Form from "components/Form/Form"
import Headline from "components/Headline/Headline"
import MovingAvatar from "components/MovingAvatar/MovingAvatar";
import Textarea from "components/Textarea/Textarea"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { prefList } from "types";


type data = {
  id: string;
  timestamp: Date;
  mask: number;
  nomask: number;
  pref: number;
}

function Home() {
  const [data, setData] = useState<data>();
  const [isLoding, setIsLoding] = useState<boolean>();
  const router = useRouter();
  const query = router.query;

  useEffect(() => {
    setIsLoding(true)
    const url = `https://script.google.com/macros/s/AKfycbxVfaK4nEecWIjnCoRbo-fEqwRAtcf7lgNBDitcZq9R8z_wzDaB63ZI-Q5RIxb18BvdJg/exec?q=${query.id}`
    async function fetchData() {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
    }
    if (router.isReady) {
      fetchData()
    }
    setIsLoding(false)
  }, [query, router])

  if(isLoding){
  return <p>aaa</p>
    }

  return (
    <>
      <Headline subject={`${prefList[data?.pref]} のページ`} />
      <MovingAvatar />
      <Textarea text="これは　それっぽいフォントを　用いた　テキストエリアです" />
      <Form />
    </>
  )
}
export default Home



