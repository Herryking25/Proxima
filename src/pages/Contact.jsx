import React from 'react'
import Navbar from '../components/NavBar'
import ContactSlide from '../components/ContactSlide'
import ContactCards from '../components/ContactCards'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactSlide />
      <ContactCards />
      <ContactForm />
      <Footer />

    </div>
  )
}

export default Contact
