import * as React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import { Fragment } from "react";
import { Button  } from "@mui/material";
import Image from 'next/image'
import google from '../assets/google.png'

import Form from "../Components/form";
export default function LoginnPage() {
  const { data: session } = useSession();
  console.log(session)
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
        <img src={session.user.image} alt='gagan image' style = {{borderRadius:'50px'}}/>
      </>
    )
  }
  return (
    <Fragment>
     <div className="h-screen loginn logbg">
      <div className="flex h-screen justify-center items-center"> 
        <div className="box-border bg-gray-300  p-4 shadow-2xl ...  rounded-xl">
        <Form/>   
        
        <div className='flex justify-center mb-4'><p> sign up using </p></div>
        <div  className='flex justify-center'>
        <Button type="button"
         className="text-black bg-white font-medium rounded-lg text-sm py-2.5 text-center mr-2 mb-2 px-16" 
        variant="outlined" onClick={() => signIn('google',{ callbackUrl:`${window.location.origin}`})}>
           <Image src={google} alt="Google icon"width={30}height={30}/>Google</Button> 
       </div>
      </div> 
     </div>
    </div>
    </Fragment>
  )
}