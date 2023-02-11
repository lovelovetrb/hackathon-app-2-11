import css from "components/MovingAvatar/MovingAvatar.module.css"
import Image from 'next/image'



const MovingAvatar = () => {
    return (
        <div className={css.div}>
            <Image src="/peach.png" width={50} height={50} alt="My avatar" />
        </div>
    )
}


export default MovingAvatar