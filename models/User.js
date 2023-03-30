import mongoose from 'mongoose'
import validator from 'validator'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, 'Please Enter Your Name'],
        minLength: 5,
        maxLength: 100,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please Enter Your Email'],
        validate:{
            validator: validator.isEmail,
            message: 'Please Enter An Email',
        },
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: 6,
        select:false,
    },
    dob: {
        type: String,
        maxlength: 50,
        default: 'Not Mentioned',
    },
    gender: {
        type: String,
        trim: true,
        maxlength: 20,
        default: 'Not Mentioned',
    },
})

export default mongoose.model('Users',UserSchema)