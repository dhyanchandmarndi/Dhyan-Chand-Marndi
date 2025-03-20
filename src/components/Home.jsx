import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <section id='home'>
      <div className='container'>
      <div className='container home-container'>      
      <div className='content-left'>
        <img src='./src/assets/avatar.jpg' alt='profile image' className='profile-icon'></img>
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
