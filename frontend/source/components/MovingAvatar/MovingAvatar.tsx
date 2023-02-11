import css from "components/MovingAvatar/MovingAvatar.module.css"
import Image from 'next/image'
import { data } from "types"

type props = {
    data: data[]
}

const MovingAvatar = ({ data }: props) => {
    const r = Math.floor((data[0].mask / (data[0].mask + data[0].nomask)) * 10);
    for (let i = 1; i < r + 1; i++) {
        console.log("i = " + i);
        <div className={css.imageFlex}>
            <Image
                src="/NoMaskMan.png"
                className={`${css.keyframe2} ${css.animation} ${css.image}`}
                alt="My avatar"
                fill
            />
        </div>
    }
    return (
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
            <Image
                src="/NoMaskMan.png"
                className={`${css.keyframe2} ${css.animation} ${css.image}`}
                alt="My avatar"
                fill
            />
            <Image
                src="/NoMaskMan.png"
                className={`${css.keyframe2} ${css.animation} ${css.image}`}
                alt="My avatar"
                fill
            />
            <Image
                src="/NoMaskMan.png"
                className={`${css.keyframe2} ${css.animation} ${css.image}`}
                alt="My avatar"
                fill
            />
            <Image
                src="/NoMaskMan.png"
                className={`${css.keyframe2} ${css.animation} ${css.image}`}
                alt="My avatar"
                fill
            />
            <Image
                src="/NoMaskMan.png"
                className={`${css.keyframe2} ${css.animation} ${css.image}`}
                alt="My avatar"
                fill
            />
            <p>{r}</p>
        </div>
    )
}


export default MovingAvatar
