import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../store';


export default function App({ Component, pageProps }: AppProps) {
  return  <Component {...pageProps} />


}
