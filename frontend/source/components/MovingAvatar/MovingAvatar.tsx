import css from "components/MovingAvatar/MovingAvatar.module.css"
import Image from 'next/image'
import { data } from "types"
import Statusbar from "components/Statusbar/Statusbar"

type props = {
    data: data[];
    id: string;
}

const MovingAvatar = ({ data, id }: props) => {
    const r = Math.floor((data[0].mask / (data[0].mask + data[0].nomask)) * 10);
    const srcList: string[] = [];
    const path = `no-repeat url("/${id}.jpg")`
    const background = {
        background: path,
        backgroundSize: "100% 100%"
    };
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
        <div>
            <Statusbar ratio={r} />
            <div className={css.MovingAvatarPosition} style={background}>
                <div className={css.imageFlex}>
                    {srcList.map((path: string, index: number) => {
                        return (
                            <Image
                                src={`${path}`}
                                className={`${css.keyframe2} ${css.animation} ${css.image}`}
                                alt="My avatar"
                                fill
                                key={index}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MovingAvatar
