const express=require('express')
const path= require('path')
const nocache = require("nocache")
const bodyparser=require('body-parser');
const session = require('express-session');
const{v4:uuidv4}=require('uuid')
const zntra=express();

const router=require('./router')
const port=process.env.port||3000;
// zntra.use(bodyparser.json)
zntra.use(bodyparser.urlencoded({extended:true}))

zntra.set('view engine','ejs')
//folder
zntra.use('/static',express.static(path.join(__dirname,'public')))

zntra.use(nocache())
zntra.use(session({
    secret:'uuidv4',
    resave:false,
    saveUninitialized:true
}));



zntra.use(router)

zntra.listen(port,()=>{console.log("click it http://localhost:3000")});  