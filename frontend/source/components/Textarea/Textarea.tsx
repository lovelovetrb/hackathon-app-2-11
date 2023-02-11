import css from "components/Textarea/Textarea.module.css"

type Props = {
  text: String
}

const Textarea = ({ text }: Props) => {
  return (
    <div className={css.main}>
      <p>{text}</p>
    </div>
  )
}

export default Textarea
