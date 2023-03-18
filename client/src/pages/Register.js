import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormComponent } from '../components'
import { useAppContext } from '../context/appContext'

import './register.css'

const initialState = {
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    isMember: true,
  }

const Register = () => {
    const {loginUser, registerUser} = useAppContext()
    const navigate = useNavigate()
    const [values, setValues] = useState(initialState)

    const toggleMember = (e) =>{
        setValues({...values,isMember: !values.isMember})
    }
    
    const handleChange = (e) =>{
        console.log(e.target.name, e.target.value)
        setValues({...values, [e.target.name]: e.target.value})
        
    }

    const handleSubmit = () =>{
        const { name, email, password, confirmPassword, isMember } = values
        if(!email || !password || (!isMember && !name)){
            alert('Please enter all credentials')
        }
        console.log(values)
        console.log('Form is submitted')
        if(values.isMember){
            const currUser = {email,password}
            loginUser(currUser)
            navigate('/')
        }
        else{
            const currUser = {name,email,password}
            registerUser(currUser)
            navigate('/profile')
        }
    }

    
    return(
        <div className="register">
            <div className={values.isMember? 'log-container':"reg-container"}>
                <div className='reg-heading'>
                    <span>{values.isMember? 'Login':'Register'}</span>
                </div>
                <div className='reg-line'>
                </div>
                <div className='reg-form'>
                    {/* Username */}
                    {!values.isMember && <div className='reg-username'>
                        <FormComponent 
                            type='text'
                            name='username'
                            placeholder='Username'
                            handleChange={handleChange}
                        />
                    </div>}
                    {/* Email */}
                    <div className='reg-email'>
                        <FormComponent 
                            type='email'
                            name='email'
                            placeholder='Email'
                            handleChange={handleChange}
                        />
                    </div>
                    {/* Password */}
                    <div className='reg-password'>
                        <FormComponent 
                            type='password'
                            name='password'
                            placeholder='Password'
                            handleChange={handleChange}
                        />
                    </div>
                    {/* Confirm Password */}
                    {!values.isMember && <div className='reg-password'>
                        <FormComponent 
                            type='password'
                            name='confirm'
                            placeholder='Confirm Password'
                            handleChange={handleChange}
                        />
                    </div>
                    }
                </div>
                <div className='button'>
                    <button 
                    className='reg-btn'
                    onClick={handleSubmit}
                    >
                        {values.isMember? 'Login':'Register'}
                    </button>
                </div>
                <div className='toggle'>
                    <span className='member'>{values.isMember? 'Not a member?':'Already a member?'}</span> 
                    <span className='reg-tog' onClick={toggleMember}>{!values.isMember? 'Login':'Register'}</span>
                </div>
            </div>
        </div>
    )
}

export default Register;