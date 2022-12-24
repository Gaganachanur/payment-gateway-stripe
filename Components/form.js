import { Fragment } from "react"
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
//import "semantic-ui-css/semantic.min.css";
import {Divider} from 'semantic-ui-react'

export default function LoginnPage() {
 
    return (
      <Fragment>
      <form >
      <label className="block">
      <span className="block text-sm font-medium text-slate-700">Username</span>
      <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    " />
 
     <span className="block text-sm font-medium text-slate-700">Email</span>
      <input type="email" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>

      <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
        Please provide a valid email address.
      </p>
     <span className="block text-sm font-medium text-slate-700">Password</span>
    
    <input type="password" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
    </label>
    </form>
     <div className="flex justify-end ">
      <IconButton aria-label="fingerprint" className="my-3" onClick={()=>{alert('finger print')}} color="secondary"><Fingerprint /> Log In </IconButton>
    </div>
    <Divider horizontal>Or</Divider>
   </Fragment>
  )
}