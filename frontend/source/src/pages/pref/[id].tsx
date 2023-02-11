import Form from "components/Form/Form"
import Headline from "components/Headline/Headline"
import MovingAvatar from "components/MovingAvatar/MovingAvatar";
import Textarea from "components/Textarea/Textarea"
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Headline subject={`${id} のページ`} />
      <MovingAvatar />
      <MovingAvatar />
      <Textarea text="これは　それっぽいフォントを　用いた　テキストエリアです" />
      <Form />
    </>
  )
}
