import css from "components/MovingAvatar/MovingAvatar.module.css"
import Image from 'next/image'



const MovingAvatar = () => {
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
        </div>
    )
}


export default MovingAvatar