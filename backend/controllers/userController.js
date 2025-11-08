import validator from 'validator';
import bycrpt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'

const createtoken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)

}
//route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "user doesn't exists" })
        }
        const isMatch = await bycrpt.compare(password, user.password);
        if (isMatch) {
            const token = createtoken(user._id)
            res.json({ success: true, token })

        } else {
            res.json({
                success: false, message: "invalid credentials"
            })

        }

    }
    catch {
        res.json({
            success: false, message: error.message
        })


    }

}

//route for register user
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        //checking user already exist....
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "user already exist" })
        }
        //validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "please enter a valid email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "please enter a storng password" })
        }
        //hashing user password 
        const salt = await bycrpt.genSalt(15);
        const hashedPassword = await bycrpt.hash(password, salt)
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()
        const token = createtoken(user._id)
        res.json({ success: true, token })
    }
    catch (error) {
        console.log(error)
        res.json({
            success: false, message: error.message
        })

    }
}




//route for admin login
const adminLogin = async (req, res) => {
    try {
        const{email,password}=req.body
        if(email===process.env.ADMIN_EMAIL&&password===process.env.ADMIN_PASSWORD){
            const token=jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"invalid credentials"})
        }
    } catch (error) {
         
        res.json({
            success: false, message: error.message})
        
    }

}

export { loginUser, registerUser, adminLogin }