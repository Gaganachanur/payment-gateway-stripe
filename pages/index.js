import Head from 'next/head'
import { Button } from '@mui/material'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

import HomePage from '../Components/homePage'


export default function Home() {
  const router = useRouter()
  const handleClick = e => {
    e.preventDefault()
    router.push('/LogInn')
  }

  return (
  <Fragment>

    <HomePage/>
  {/*    <Button type="button" onClick={handleClick}>
       LogInn
   </Button> */}

  </Fragment>
  ) 
}
