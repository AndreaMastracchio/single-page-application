/* Dep */
import React from "react"
import { GlobalProvider } from '../context/GlobalContext'
import NextNProgress from "nextjs-progressbar"

/* Components */
import Navbar from "../components/Navbar"

/* Style */
import "@fortawesome/fontawesome-svg-core/styles.css";
import '../styles/main.scss'

const SinglePage: React.FC<any> = ({ Component, pageProps }) => {

  const { collection } = pageProps 

  return (
    <GlobalProvider>
      <Navbar links={collection}/>
      <NextNProgress 
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
          options={{ showSpinner: false }}
        />
        <div className='container mx-auto'>
          <Component {...pageProps} />
        </div>
    </GlobalProvider>
  )
}

export default SinglePage