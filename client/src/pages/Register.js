import { useState } from 'react'
import { FormComponent } from '../components'
import { useAppContext } from '../context/appContext'

import './register.css'

const Register = () => {
    const { isMember, toggleMember } = useAppContext()
    const [mem, setMem] = useState(!isMember)

    const toggleRegister = () =>{
        setMem(!mem)
        toggleMember(mem)
    }
    
    return(
        <div className="register">
            <div className={isMember? 'log-container':"reg-container"}>
                <div className='reg-heading'>
                    <span>{isMember? 'Login':'Register'}</span>
                </div>
                <div className='reg-line'>
                </div>
                <div className='reg-form'>
                    {/* Username */}
                    {!isMember && <div className='reg-username'>
                        <FormComponent 
                            type='text'
                            name='username'
                            placeholder='Username'
                        />
                    </div>}
                    {/* Email */}
                    <div className='reg-email'>
                        <FormComponent 
                            type='email'
                            name='email'
                            placeholder='Email'
                        />
                    </div>
                    {/* Password */}
                    <div className='reg-password'>
                        <FormComponent 
                            type='password'
                            name='password'
                            placeholder='Password'
                        />
                    </div>
                    {/* Confirm Password */}
                    {!isMember && <div className='reg-password'>
                        <FormComponent 
                            type='password'
                            name='confirm'
                            placeholder='Confirm Password'
                        />
                    </div>
                    }
                </div>
                <div className='button'>
                    <button className='reg-btn'>{isMember? 'Login':'Register'}</button>
                </div>
                <div className='toggle'>
                    <span className='member'>{isMember? 'Not a member?':'Already a member?'}</span> 
                    <span className='reg-tog' onClick={toggleRegister}>{!isMember? 'Login':'Register'}</span>
                </div>
            </div>
        </div>
    )
}

export default Register;