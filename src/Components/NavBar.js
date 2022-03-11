import React from 'react'
import avatar from '../img/profile-pic.png';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt=""/>
                 </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Accueil
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            Profil
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <p>
                        @2023 Guichard Anthony
                    </p>
            </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;
