import React from 'react'
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './home.css';
import Typed from 'react-typed';
import 'animate.css';
import Logo from './Logo/Logo';


function Home() {
    return (
        <div className='container-fluid home-page '>
            <div className=' row align-items-center d-flex justify-content-center'>
                <div className='text-zone text-center col-sm-12 col-md-12 col-lg-6'>
                    <h1> Hi,<br /> I'm
                        <img  src={LogoTitle} alt='developer' />
                        afa
                        <br />
                        web developer
                    </h1>
                    <h2 >Frontend developer / Backend developer</h2>
                    <div className='typed-text '>
                        <Typed
                            strings={[

                                'css / Bootstrap',
                                'javascript / React',
                                'PHP / MySql']}
                            typeSpeed={30}
                            backSpeed={50}

                            loop >

                        </Typed>
                    </div>
                    <div className=' mt-5 '>
                        <Link to='/contact' className='contact-btn'>CONTACT ME</Link>
                    </div>
                </div>
                <div className='logo col-sm-12 col-md-9 col-lg-6'> <Logo /></div>
            </div>
            
        </div>
    )
}

export default Home;
