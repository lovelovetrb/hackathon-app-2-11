import css from "components/Statusbar/Statusbar.module.css"
import Image from "next/image"

const Statusbar = () => {
  return (
    <div className={css.barArea}>
      <div className={css.maskArea}>
        <p>{`mask:`}</p>
        <Image
          src="/train_red.png"
          className={`${css.image}`}
          alt="red train"
          fill
        />
      </div>
      <div className={css.nomaskArea}>
        <p>{`nomask:`}</p>
        <Image
          src="/train_blue.png"
          className={`${css.image}`}
          alt="red train"
          fill
        />
      </div>
    </div>
  )
}

export default Statusbar
