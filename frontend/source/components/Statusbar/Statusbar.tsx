import css from "components/Statusbar/Statusbar.module.css"
import Image from "next/image"
import { useState, useEffect } from "react";

type props = {
  ratio: number;
}

type style = {
  width: string,
  opacity?: string
}

const Statusbar = ({ ratio }: props) => {
  const [maskStyle, setMaskStyle] = useState<style>({
      width:`${ratio * 10}%`
    });
  const [nomaskStyle, setNomaskStyle] = useState<style>({
      width:`${(10-ratio) * 10}%`
    });

  const ratio_mask = ratio * 10
  const ratio_nomask = (10 - ratio) * 10
  useEffect(() => {
    if (ratio_mask == 0) {
      setMaskStyle({
        width: '0',
        opacity: '0'
      })
      setNomaskStyle({
        width: '100%'
      })
    }

    if (ratio_mask == 10) {
      setMaskStyle({
        width: '20%',
      })
      setNomaskStyle({
        width: '80%',
      })
    }

    if (ratio_mask == 90) {
      setMaskStyle({
        width: '80%',
      })
      setNomaskStyle({
        width: '20%',
      })
    }

    if (ratio_mask == 100) {
      setNomaskStyle({
        width: '0',
        opacity: '0'
      })
      setMaskStyle({
        width: '100%'
      })
    }

  }, [])

  return (
    <div className={css.barArea}>
      <div className={css.maskArea} style={maskStyle}>
        <div className={css.anime}>
          <p>{`mask:${ratio_mask}%`}</p>
          <Image
            src="/train_red.png"
            className={`${css.image}`}
            alt="red train"
            fill
          />
        </div>
      </div>
      <div className={css.nomaskArea} style={nomaskStyle}>
        <div className={css.anime}>
          <p>{`nomask:${ratio_nomask}%`}</p>
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
