import React from 'react'
import NavBar from '../components/NavBar'
import ServiceSection from '../components/ServiceSection'
import ServiceCarousel from '../components/ServiceCarousel'
import ServiceCards from '../components/ServiceCards'
import MovingHiringServices from '../components/MovingHiringServices'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <div>
      <NavBar />
      <ServiceCarousel />
      <ServiceSection />
      <ServiceCards />
      <MovingHiringServices />
      <CallToAction />
      <Footer />

    </div>
  )
}

export default Services
