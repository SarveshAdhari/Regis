import { useState } from 'react'
import { useAppContext } from '../context/appContext'

import { ToggleImage } from '../logo'
import { DisplayPicture } from '../components'
import './Navbar.css'

const Navbar = () => {
    const { toggleSidebar } = useAppContext()
    const [sidebar, setSidebar] = useState(false);

    const toggleSide = () => {
        setSidebar(!sidebar)
        toggleSidebar(sidebar)
    }

    return(
        <div className='nav'>
            <div className='tog'>
                <img src={ToggleImage} alt="..." onClick={toggleSide}/>
            </div>
            <div className='nav-heading'>
                <h1>REGIS</h1>
            </div>
            <div className='nav-user'>
                <div className='nav-profile'>
                    <DisplayPicture />
                </div>
                <div className='nav-logout'>
                    <button className='logout-btn'>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar