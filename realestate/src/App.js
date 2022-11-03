import React,{ useState, useEffect } from 'react';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import MoreDetails from './components/MoreDetails'
import Home from './components/Home';
import Footer from './components/Footer';
const App =()=>{
  

  return(
    
    
    <>
      
    
       

<Router>

 <Routes>
 <Route  path="/" element={<Home />} />
<Route path="/details/:id" element={<MoreDetails/>} />
  </Routes>
 

  </Router>




    </>
  )
}



export default App;