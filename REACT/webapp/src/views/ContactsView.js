import React from 'react'
import { Navbar } from 'react-bootstrap'
import Footer from '../components/Footer'
import NavbarGlobal from '../components/NavbarGlobal';



function ContactsView() {
  return (
    <div>
      <NavbarGlobal />
     
      <Navbar />
      <div style={{"height": "5000px"}}></div>
     <Footer />
    </div>
  )
}

export default ContactsView