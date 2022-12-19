// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
import test from "../../models/testPayment";
import connectmongo from "../../utils/connectDb"

export default async function handler(req, res) {
  const{name, email} = req.body;

  await connectmongo();

  const Test = await test.create(req.body)

  res.json({Test})

}

export default async function getName(req,res){
  
  const responce = await test.find();

  console.log(res.json({responce}))

} 

