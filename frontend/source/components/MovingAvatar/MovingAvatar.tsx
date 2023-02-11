import css from "components/MovingAvatar/MovingAvatar.module.css"
import Image from 'next/image'
import { data } from "types"
import Statusbar from "components/Statusbar/Statusbar"

type props = {
  data: data[]
}

const MovingAvatar = ({ data }: props) => {
  const i = data
  return (
    <>
      <div className={css.imageFlex}>
        <Image
          src="/NoMaskMan.png"
          className={`${css.keyframe2} ${css.animation} ${css.image}`}
          alt="My avatar"
          fill
        />
        <Image
          src="/MaskBuisinesMan.png"
          className={`${css.keyframe2} ${css.animation} ${css.image}`}
          alt="My avatar"
          fill
        />
        <Image
          src="/MaskBuisinesMan.png"
          className={`${css.keyframe2} ${css.animation} ${css.image}`}
          alt="My avatar"
          fill
        />
        <Image
          src="/MaskBuisinesMan.png"
          className={`${css.keyframe2} ${css.animation} ${css.image}`}
          alt="My avatar"
          fill
        />
        <Image
          src="/MaskBuisinesMan.png"
          className={`${css.keyframe2} ${css.animation} ${css.image}`}
          alt="My avatar"
          fill
        />
      </div>
      <Statusbar />
    </>
  )
}


export default MovingAvatar
