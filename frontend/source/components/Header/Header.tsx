import { Shippori_Antique, Yuji_Mai } from "@next/font/google"
import css from "components/Header/Header.module.css"


const font_header = Shippori_Antique({
  weight: "400",
  subsets: ["latin"]
})


const Header = () => {
  return (
    <>
      <header className={`${css.header} ${font_header.className}`}>
        <h3 className={css.title}>
          マスク電鉄
        </h3>
      </header>
    </>
  )
}

export default Header
