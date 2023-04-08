import { StatusCodes } from 'http-status-codes'
import { BadRequestError } from '../errors/index.js'
import User from '../models/User.js'

const register = async(req, res, next) => {
    const { name, email, password } = req.body
    if(!name || !email || !password){
        throw new BadRequestError('Please Enter All Values!')
    }
    const userAlreadyExists = await User.findOne({email})
    if(userAlreadyExists){
        throw new BadRequestError('User Already Exists!')
    }
    const user = await User.create({ name, email, password })
    res.status(StatusCodes.CREATED).json({
        user:{
            name:user.name,
            email:user.email,
            dob: user.dob,
            gender: user.gender,
    }})
}
const login = async (req, res, next) => {
    const { email , password } = req.body
    if(!email || !password){
        throw new BadRequestError('Please Enter All Values!')
    }
    const user = await User.findOne({email}).select('+password')
    if(!user){
        throw new BadRequestError('User Does Not Exist!')
    }
    //temporary login
    let isMatch=false
    if(password === user.password){
        isMatch=true
    }
    if (!isMatch) {
        throw new BadRequestError('Invalid Credentials!')
    }
    user.password = undefined
    res.status(StatusCodes.OK).json({ user})
}
const updateUser = (req, res) => {
    res.send('update User')
}

export {register, login, updateUser}