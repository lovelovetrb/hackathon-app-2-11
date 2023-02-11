import css from "components/Headline/Headline.module.css"
import Image from 'next/image'

type Props = {
  subject: string;
}

const Headline = ({ subject }: Props) => {
  return (
    <div className={css.div}>
      <Image src="/peach.png" width={64} height={64} alt="peach???" />
      <h1 className={css.h1}>{subject}</h1>
    </div>
  )
}


export default Headline
