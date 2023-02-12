import Link from "next/link"
import css from "components/ShareButton/ShareButton.module.css"

const ShareButton = () => {
  return (
    <div className={css.buttonArea}>
      <button className={css.button}>
        <Link href={`http://twitter.com/share?url=https://hackathon-app-2-11.vercel.app/&text=全国各地のマジョリティの様子をお届けします&hashtags=MajorityRailway`} >Twitterでページをシェア！</Link>
      </button>
    </div>
  )
}

export default ShareButton
