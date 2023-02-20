import { useState } from 'react'
import { useAppContext } from '../context/appContext'

import toggle from '../logo/togg.svg'
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
                <img src={toggle} alt="..." onClick={toggleSide}/>
            </div>
            <div className='nav-heading'>
                <h1>REGIS</h1>
            </div>
            <div className='nav-user'>
                <div className='nav-profile'>
                    <img src='Google.com' alt="profile" />
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