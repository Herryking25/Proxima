import React from 'react'
import NavBar from '../components/NavBar'
import ServiceSection from '../components/ServiceSection'
import ServiceCarousel from '../components/ServiceCarousel'
import ServiceCards from '../components/ServiceCards'
import MovingHiringServices from '../components/MovingHiringServices'

const Services = () => {
  return (
    <div>
      <NavBar />
      <ServiceCarousel />
      <ServiceSection />
      <ServiceCards />
      <MovingHiringServices />

    </div>
  )
}

export default Services
