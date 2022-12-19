import { Schema , model, models } from "mongoose";

const testPayments = new Schema({
name:String,
email :{
    type:String,
    require:true,
    unique:true,
},
});

const test =models.test|| model('test',testPayments);

export default test;