const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.register= async (req,res)=>{

    const {username,email,phone,password,cpassword}= req.body;

    if(!username||!email||!phone||!password||!cpassword){
        return res.status(422).json({error:"One or more fields empty"});
    }else if(password!=cpassword){
        return res.status(422).json({error:"Passwords no matching"});
    }else{

    try{
        const userExist = await User.findOne({email:email});
        if(userExist){return res.json({error:"Email already exists"})}
        const user = new User({username,email,phone,password, cpassword});



        try{
            const userSaved = await user.save()

            if(userSaved){
                return res.json({message:"User Registered Successfully!"})
            }

        }catch{
            res.json({error:"Server Error"})
        }

    }catch(err){
        console.log(err)
    }}

}
exports.signIn =  async (req,res)=>{
    try{
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({error:"One or more fields empty"});
        }

        const userLogin = await User.findOne({email:email})


        if(userLogin ){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            // const reToken = await userLogin.generateRefreshToken();

            let fifteenminutes = 15*60 * 1000;

            res.cookie('jwtoken',token,{
                expires: new Date(Date.now() + fifteenminutes),
                httpOnly:true
            })

            if(!isMatch){
                res.status(400).json({error:"User Error"});
            }else{
                res.json({message:"User SignIn Successful"});
            }

        }else{
            res.status(400).json({error:"User Error"});
        }


    }catch (err) {
        console.log(err.message)
    }
}

exports.about=(req,res)=>{
    res.json({msg: "Hello"});
}