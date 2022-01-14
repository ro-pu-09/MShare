const validator=require('express-validator')


const router = require('express').Router()





router.get('/api/authenticate/',
        validator.body('email').isEmail(),
        validator.body('password').isLength({min:5}),
(req,res,next)=>{
       const errors = validator.validationResult(req);
       
       console.log("email --> ",req.body.email)
       if(!errors.isEmpty()){
           console.log('error with the input - username or password --', errors)
       }

       else {
           console.log("signed up user.... hello there...")
       }
})


module.exports=router;