import React from 'react'
import './Home.css'
import avatar from '../assets/avatar.jpg'

const Home = () => {
  return (
    <section id='home'>
      <div className='container'>
      <div className='container home-container'>      
      <div className='content-left'>
        <img src={avatar} alt='profile image' className='profile-icon' />

        <h1>Hello! I'm Dhyan Chand Marndi</h1>
      </div>
      <div className='content-right'>
        <h2>A Web Developer based in Bhubaneswar, Odisha</h2>
        <p>Passionate creating great experiences for Digital Product</p>
      </div></div>

      </div>
      
    </section>
  )
}
 
export default Home
