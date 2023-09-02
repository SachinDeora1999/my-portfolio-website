import React from 'react'
import './about.css'
import ME from '../../assets/karsten-winegeart-CbzMRibb4xw-unsplash.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About img" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">


                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>


                        <article className='about__card'>
                            <FiUsers className='about__icon' />
                            <h5>Clints</h5>
                            <small>300+ Worldwide</small>
                        </article>


                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Project</h5>
                            <small>30+ Complet Project</small>
                        </article>


                    </div>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias possimus,
                        id similique nobis dignissimos commodi sed deserunt optio recusandae repellat sunt tempore iure molestias voluptatum modi consequuntur vitae eligendi aliquid.</p>
                    < a href='#contact' className='btn bnt-primary'>Let's Talk</a>

                </div>


            </div>


        </section>
    )
}

export default About
