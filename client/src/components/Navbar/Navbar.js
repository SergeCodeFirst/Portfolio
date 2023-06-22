import '../../views/GeneralStyle/GeneralStyle.css'
import '../Navbar/Navbar.css'

import { useState } from 'react'

const NavBar = (props) => {
    const [navBarOff, setNavBarOff] = useState(true)
    
    const toggleNavBar = () => {
        setNavBarOff(!navBarOff);
        // Turn of the main bachground
        props.toggleSection();
    }

    return <div>
        <header className={navBarOff? "header": "header active"}>
            <div className="container">
                <div className="row flex-end">
                    <button type="button" className="nav-toggler" onClick={toggleNavBar}>
                        <span></span>
                    </button>
                    <nav className={navBarOff? "nav notvisible" : "nav"}>
                        <div className="nav-inner">
                            <ul>
                                <li><a href="/" className="nav-item">Home</a></li>
                                <li><a href="/about" className="nav-item">About</a></li>
                                <li><a href="/portfolio" className="nav-item">Portfolio</a></li>
                                <li><a href="/contact" className="nav-item">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    </div>
}

export default NavBar;