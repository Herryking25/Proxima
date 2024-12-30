import React from 'react'
import NavBar from '../components/NavBar'
import AboutCarousel from '../components/AboutCarousel'
import AboutSection from '../components/AboutSection'
import AboutAchievements from '../components/AboutAchievement'
import AboutVision from '../components/AboutVision'
import AboutMoving from '../components/AboutMoving'
import Testimonials from '../components/Testimonials'
import CustomerLine from '../components/CustomerLine'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='bg-gradient-to-r from-[#f0f4f8] to-[#f8e7ef]'>
      <NavBar />
      <AboutCarousel />
      <AboutSection />
      <AboutAchievements />
      <AboutVision />
      <AboutMoving />
      <Testimonials />
      <CustomerLine />
      <Footer />
    </div>
  )
}

export default About
