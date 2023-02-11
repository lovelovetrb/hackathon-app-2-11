import Form from "components/Form/Form"
import Headline from "components/Headline/Headline"
import MovingAvatar from "components/MovingAvatar/MovingAvatar";
import Textarea from "components/Textarea/Textarea"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { data, prefList } from "types";


function Home() {
  const [data, setData] = useState<data[]>([{
      id:'',
      timestamp:new Date(1999/1/1),
      mask:1,
      nomask:1,
      pref:0,
    }]);
  const [isLoding, setIsLoding] = useState<boolean>(true);
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
console.log(data)
  return (
    <>
      <Headline subject={`${prefList[data[0]?.pref-1] ? prefList[data[0]?.pref-1].name : undefined} のページ`} />
      <MovingAvatar data={data} />
      <Textarea text="これは　それっぽいフォントを　用いた　テキストエリアです" />
      <Form />
    </>
  )
}
export default Home



