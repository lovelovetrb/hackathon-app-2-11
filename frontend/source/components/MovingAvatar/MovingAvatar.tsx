import css from "components/MovingAvatar/MovingAvatar.module.css"
import Image from 'next/image'
import { data } from "types"
import Statusbar from "components/Statusbar/Statusbar"
import { ReactElement, ReactNode } from "react"

type props = {
    data: data[]
}

const MovingAvatar = ({ data }: props) => {
    const r = Math.floor((data[0].mask / (data[0].mask + data[0].nomask)) * 10);
    const srcList: string[] = [];
    for (let i = 1; i < r + 1; i++) {
        console.log("i = " + i);
        srcList.push(
            "/MaskBuisinesMan.png"
        );
    }
    for (let j = r + 1; j < 11; j++) {
        srcList.push(
            "/NoMaskMan.png"
        );
    }
    return (
        <div className={css.imageFlex}>
            {srcList.map((path: string, index: number) => {
                return (
                    <Image
                        src={`${path}`}
                        className={`${css.keyframe2} ${css.animation} ${css.image}`}
                        alt="My avatar"
                        fill
                    />
                )
            })}
        </div>
    )
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
