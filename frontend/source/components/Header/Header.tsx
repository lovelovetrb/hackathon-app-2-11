import { Shippori_Antique, Yuji_Mai } from "@next/font/google"
import css from "components/Header/Header.module.css"
import Image from "next/image"


const font_header = Shippori_Antique({
  weight: "400",
  subsets: ["latin"]
})


const Header = () => {
  return (
    <>
      <header className={`${css.header} ${font_header.className}`}>
        <div className={css.flex}>
          <h3 className={css.title}>
            マスク電鉄
          </h3>
          <Image
            src="/saikoro_1.png"
            className={`${css.image}`}
            alt="red train"
            height={50}
            width={50}
          />
        </div>
      </header>
    </>
  )
}

export default Header
