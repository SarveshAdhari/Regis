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
const login = (req, res) => {
    res.send('Login User')
}
const updateUser = (req, res) => {
    res.send('update User')
}

export {register, login, updateUser}