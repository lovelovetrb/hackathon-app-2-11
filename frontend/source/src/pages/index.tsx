import Head from 'next/head'
import css from '@/styles/Home.module.css'
import Headline from 'components/Headline/Headline'
import JapanMap from 'components/JapanMap/JapanMap'
import Textarea from 'components/Textarea/Textarea'
import Header from 'components/Header/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>マスク予報 | DashBoard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={css.main}>
        <Header />
        <div className={css.wrapper}>
          <Headline subject='マスク予報とは' />
          <Textarea text={`あなたの　撮影した写真から　AIがマスク着用率(ちゃくようりつ)を　判定します。\n下の日本地図から　各都道府県（かくとどうふけん）の　マスク着用の状況を　確認するために出発！`} />

          <Headline subject='都道府県を選択' />
        </div>
        <JapanMap />
        <div className={css.wrapper}>
          <Headline subject='このサイトで出来ること' />
          <Textarea text={`各都道府県（かくとどうふけん）のページに飛ぶことで　あなたの身の回りの　マスク着用率（ちゃくようりつ）を　視覚的（しかくてき）に　確認できます！
        \nこれで　今のトレンドを　掴めること　間違いなし！！
        \nまた　各都道府県（かくとどうふけん）のページから　写真投稿（しゃしんとうこう）することによって　身の回りのマスク着用状況（ちゃくようじょうきょう）を　AIが画像から判断し　アプリ上に反映できます！
        \nさあ　はじめましょう`} />
        </div>


      </main>
    </>
  )
}
