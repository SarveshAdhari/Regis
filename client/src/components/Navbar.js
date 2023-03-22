import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/appContext'

import { ToggleImage } from '../logo'
import { DisplayPicture } from '../components'
import './Navbar.css'

const Navbar = () => {
    const { toggleSidebar, logoutUser } = useAppContext()
    const [sidebar, setSidebar] = useState(true);
    const navigate = useNavigate()

    const toggleSide = () => {
        setSidebar(!sidebar)
        toggleSidebar(sidebar)
    }

    const logout = () => {
        logoutUser()
    }

    return(
        <div className='nav'>
            <div className='tog'>
                <img src={ToggleImage} alt="..." onClick={toggleSide}/>
            </div>
            <div className='nav-heading'>
                <h1 onClick={()=>navigate('/')}>REGIS</h1>
            </div>
            <div className='nav-user'>
                <div className='nav-profile' >
                    <DisplayPicture onClick={()=>navigate('/profile')}/>
                </div>
                <div className='nav-logout'>
                    <button className='logout-btn' onClick={logout}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar