import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
    return (
        <div className='navbar'>

            <div className='search-icon'><FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#637381",}} /></div>

            <div className='nav-right'>
                <div className='img1'><img src="./images/flag.png" alt="flag" width={"25px"} /></div>
                <div className='img2'><img src="./images/notification.png" alt="notification" width={"40px"}/></div>
                <div className='img3'><img src="./images/shape.png" alt="shape" width={"20px"}/></div>
                <div className='img4'><img src="./images/image.png" alt="img" width={"40px"}/></div>
            </div>

        </div>
    )
}

export default NavBar;