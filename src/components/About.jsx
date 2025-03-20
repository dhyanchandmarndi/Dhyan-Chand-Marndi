import React from 'react'
import './About.css'
import profile from '../assets/profile.jpg'

const About = () => {
  return (
    <section className='about' id='about'>
        <div className='container'>
        <div className=' container about-container'>
        <div className='container-left'>
                <h1 id='about_heading'>About Me</h1>
                <div className='about-img'>
                    <div className='border-box'></div>
                    <img src={profile} className='profile' alt='profile photo'></img>
                </div>
            </div>
            <div className='container-right'>
            <div className='about-text'>
                <div className='text-area'>
                <br/>
                <p>
                    I am a web developer and I am very passionate about my work.
                    I live in Bhubaneswar, Odisha. I am currently pursuing my
                    B.Tech degree in Computer Science and Engineering from 
                    Kalinga Institute of Industrial Technology, Bhubaneswar. 
                </p>
                <br />
                <p>
                    My computer science background provided a strong foundation in data structures
                    and algorithms. I am a quick learner and always eager
                    to learn new technologies. I am always ready to take on new
                    challenges and I am always looking for opportunities to grow.
                </p>
                </div>
                
            </div>
            </div>
        </div>

        </div>
    </section>
  )
}

export default About
