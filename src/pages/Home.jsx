import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Service from '../components/Service'
import WhyChooseUs from '../components/WhyChooseUs'
import CustomerLine from '../components/CustomerLine'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/Faqs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <NavBar />
        <Hero />
        <Service />
        <WhyChooseUs />
        <CustomerLine />
        <Testimonials />
        <FAQ />
        <Footer />
    </div>
  )
}

export default Home
