import { useRouter } from 'next/router'
import React from "react";
import { Fragment } from "react";

const paymentSucess = () => {
    const router = useRouter();
  return (
    <Fragment>
      <h1 className="flex flex-wrap justify-center text-3xl p-3">
        Order Placed Succesfully
      </h1>
      <h1 className="flex flex-wrap justify-center text-3xl p-3"> Thank you </h1>
      <div className="flex  justify-center  p-3 ">
       
         <button 
          onClick={() => router.push('/')}
         className="bg-black text-white text-xl px-9 py-5 rounded-lg ... 
         transform transition-colors hover:scale-105 hover:shadow-2xl  ">
            Continue Shoping</button>
      </div>
    </Fragment>
  );
};

export default paymentSucess;
