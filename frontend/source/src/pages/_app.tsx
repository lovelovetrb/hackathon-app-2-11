import '@/styles/destyle.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Kosugi_Maru } from "@next/font/google"

const font = Kosugi_Maru({
  weight: "400",
  subsets:["latin-ext"]
})

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <style jsx global>{`
      html {
          font-family: ${font.style.fontFamily}
        }
    `}
      </style>
      <Component {...pageProps} />
    </>
  )
}
