import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="https://hackathon-app-2-11.vercel.app/5.jpg" />
        <meta name="twitter:title" content="マスク電鉄" />
        <meta name="twitter:description" content="個人の判断なら周りに合わせたいと思いがちですよね..." />
        <meta name="twitter:image" content="https://hackathon-app-2-11.vercel.app/card.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
