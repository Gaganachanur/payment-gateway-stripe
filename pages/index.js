import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

import HomePage from '../Components/homePage'
import "semantic-ui-css/semantic.min.css";


export default function Home() {
  const router = useRouter();

  return (
  <Fragment>
    <HomePage/>
  </Fragment>
  ) 
}
