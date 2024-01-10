var express =  require('express')
var router=express.Router()

const val ={
    email :"ad99@gmail.com",
    password:"Zntra5453"
}

router.get('/home',(req,res)=>{
    if(req.session.user){

        res.render('home', {usr: req.session.user});
    }
    else{
        res.redirect('/');
    }
    
})


router.get('/',(req,res)=>{
    if(req.session.user) {
        res.redirect("home")
    } else {
        res.render('login')
    }
})


router.post('/',(req,res)=>{
    console.log(req.body);
    if(req.body.usmail==val.email && req.body.pass == val.password)
       {
        
         req.session.user=req.body.usmail;
         res.redirect('/home')
       }
       else
       {
       
        res.render('login');
       }
})


router.get('/logout',(req,res) => {
    req.session.destroy(function (err) {
        if(err){
            console.log(err);
            res.send("Error")
        }else{
            res.redirect('/');
        }
    })
})
module.exports = router;