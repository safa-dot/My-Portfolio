import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import './about.css';
import 'animate.css';
import { faPhp, faBootstrap, faReact, faJsSquare, faCss3, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import AnimatedText from 'react-animated-text-content';


function About() {
    return (
        <div className='container about-page '>
            <div className='row align-items-center '>
                <div className='text-zone col-sm-12 col-md-12 col-lg-6'>
                    <h1>About me <span className='dot1'>.</span><span className='dot2'>.</span><span className='dot3'>.</span></h1>
                    <p className='p1 pt-0'><AnimatedText>I'm an ambitious front-end developer, looking for a role in established IT company, with the opportunity to work with the latest technologies on diverst and challenging projects.</AnimatedText></p>

                    <p className='p2 '><AnimatedText >I have a wide vision and always add my unique personal touch, i always achieve what i hope for, and put my self in challenging situations in order to improve my skills and competences.</AnimatedText></p>



                </div>
                <div className='cube-container col-sm-12 col-md-12 col-lg-6'>
                    <div className='cube-spiner '>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faBootstrap} color='#7952b3' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faPhp} color='#7a86b8' />
                        </div>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default About


