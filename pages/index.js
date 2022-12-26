import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

import HomePage from '../Components/homePage'
import "semantic-ui-css/semantic.min.css";


export default function Home() {
  const router = useRouter();

  return (
  <Fragment>
      <Head>
          <title>Fashion.com</title>
          <meta name="application-name" content="Beautiful application name"/>
          <link rel="icon" href="https://i.pinimg.com/736x/bc/03/d2/bc03d21349a63908b05e908ed6a3cf29.jpg" type="image/x-icon" />


          </Head>
    <HomePage/>
  </Fragment>
  ) 
}
