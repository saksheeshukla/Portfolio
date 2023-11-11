/* i have made it jsx for using the shortcuts if it's js then using emit would be difficult */

import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Service from './components/service/Service'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Service/>
      <Portfolio/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App
