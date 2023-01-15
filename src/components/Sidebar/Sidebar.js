import './sidebar.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faBarsProgress} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';



function Sidebar() {
    return (
        <div className='nav-bar container fluid text-center d-flex justify-content-start' >
            <row className=' row '>
                <Link className='logo pt-5' to='/'>
                    <img className='col-10 ' src={LogoS} alt='logo' />
                </Link>
                <nav className='container fluid'>

                    <row className=" pages row">
                        <NavLink exact='true' activeclassname='active ' className='home-link' to='/'>
                            <FontAwesomeIcon icon={faHome} color='#4d4d4e' size="3x" />
                            <span className='hidden'>HOME</span>
                        </NavLink>
                        <NavLink exact='true' activeclassname='active ' className='about-link' to='/about'>
                            <FontAwesomeIcon icon={faUser} color='#4d4d4e' size="3x" />
                            <span className='hidden'>ABOUT</span>
                        </NavLink>
                        <NavLink exact='true' activeclassname='active ' className='contact-link' to='/projects'>
                        <FontAwesomeIcon icon={faBarsProgress} color='#4d4d4e' size="3x" />
                            <span className='hidden'>PROJECTS</span>
                        </NavLink>
                        <NavLink exact='true' activeclassname='active ' className='contact-link' to='/contact'>
                            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' size="3x" />
                            <span className='hidden'>CONTACT</span>
                        </NavLink>
                    </row>

                </nav>
                <div className='social-media container fluid d-flex align-items-end justify-content-center'>
                    <row className='' >
                        <ul >
                            <li>
                                <a target='_blank' rel='noreferrer' href='https://github.com/safa-dot'>
                                    <FontAwesomeIcon icon={faGithub} size='2x' />
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a target='_blank' rel='noreferrer' href='https://www.instagram.com/safa__dhm/'>
                                    <FontAwesomeIcon icon={faInstagram} size='2x' />
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/safa-de-1b8b85198'>
                                    <FontAwesomeIcon icon={faLinkedin} size='2x' />
                                </a>
                            </li>
                        </ul>
                    </row>
                </div>

            </row>






        </div>
    );
}

export default Sidebar;