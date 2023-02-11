import css from "components/Loding/Loding.module.css"
import Image from "next/image"

const Loding = () => {
  return (
    <div className={css.lodingArea}>
      <p className={css.loding}>loding...</p>
      <Image
        src="/train_red.png"
        className={`${css.image}`}
        alt="red train"
        fill
      />
    </div>
  )
}

export default Loding
