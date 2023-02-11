import css from "components/Statusbar/Statusbar.module.css"
import Image from "next/image"

type props = {
  ratio: number;
}
const Statusbar = ({ ratio }: props) => {
  const ratio_mask = `${ratio * 10}%`
  const ratio_nomask = `${(10 - ratio) * 10}%`

  const maskStyle = {
    width: ratio_mask
  }
  const nomaskStyle = {
    width: ratio_nomask
  }

  return (
    <div className={css.barArea}>
      <div className={css.maskArea} style={maskStyle}>
        <div className={css.anime}>
          <p>{`mask:${ratio_mask}`}</p>
          <Image
            src="/train_red.png"
            className={`${css.image}`}
            alt="red train"
            fill
          />
        </div>
      </div>
      <div className={css.nomaskArea} >
      <div className={css.anime}>
        <p>{`nomask:${ratio_nomask}`}</p>
        <Image
          src="/train_blue.png"
          className={`${css.image}`}
          alt="red train"
          fill
        />
        </div>
      </div>
    </div>
  )
}

export default Statusbar
