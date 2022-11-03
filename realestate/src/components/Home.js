import React from 'react'
import BodyDesign from './Catalogue'
import Footer from './Footer'
import Header from './Header'
import ListSection from './ListSection'
import Location from './Location'
import Services from './Services'

const Home = () => {
  return (
    <> 
     <Header/>
     <Services/>
     <ListSection/> 
    <Location/>
    <BodyDesign/> 
    <Footer/>
    
     </>
  )
}

export default Home