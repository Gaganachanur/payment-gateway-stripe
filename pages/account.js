import React from "react";
import {useSession, signIn, signOut} from "next-auth/react";
const account = () =>{

    const {data: session, status} = useSession({required:true});
    if(['authenticated'].includes(status)){
    return (
           <div>
            <h1>Signed in as {session.user.name}</h1>
           </div>
    );
}
}

export default account;