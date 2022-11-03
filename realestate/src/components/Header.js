import React from 'react'
import {animate, motion} from 'framer-motion'
import AOS from "aos";
import "aos/dist/aos.css";


const Header = () => {
  AOS.init()
  return (
    <><div className=' absolute w-full min-h-screen'>
    <img src='./img/cat2.jpg' className="absolute z-0 object-cover object-center top-0 w-full h-1/2"/>
  
    
     <div className='absolute z-20 bottom-20 right-0 left-0 inline-flex space-x-20 justify-center font-bold uppercase tracking-wide -text-gray-600'>
      <a href='#services' className='text-gray-600 ease-in duration-200 hover:text-cyan-600'>services</a>
      <a href='#list' className='text-gray-600 ease-in duration-200 hover:text-cyan-600'>Listing</a>
      <a href='#catalogue' className='text-gray-600 ease-in duration-200 hover:text-cyan-600'>Catalogue</a>
      </div>
    
  </div>



  <motion.div initial={{y:-400}} animate={{y:0}} transition={{type:'spring', stiffness:500}} className='mx-2 relative z-10 flex min-h-screen h-auto justify-center items-center'>
    <div className='relative max-w-4xl'>
      <div id='bgprofile' className="bg-gradient-to-r from-cyan-600 to-teal-600 absolute z-10 inset-0 p-12 w-full max-w-4xl shadow-lg transform -skew-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg rounded-lg">
      </div>
    <div id="profile" className='relative z-20 bg-white md:flex justify-between p-12 shadow-lg rounded-lg w-full max-w-4xl'>
      <div className='sm:flex flex-col justify-between space-y-6 py-6 md:pr-10 ml-6 sm:ml-2'>
        <div className=''>
          <h2 className='text-lg'>VOTRE FOYER S+ BONHEUR</h2>
          <h1 className='pt-1 text-4xl font-bold text-gray-800 mb-8'>GIRALDA</h1>
          <p className='text-xl leading-relaxed'>
          Avec GIRALDA Group, quelle que soit l'étape du voyage de retour à la maison dans laquelle vous vous trouvez, nous sommes là pour vous responsabiliser en rendant tout ce qui est à la maison simple, efficace et agréable. 
          </p>
          </div>
      </div> 
     <div className='flex h-full w-full justify-center sm:mt-6 items-center'><img id="urpic" src='./me.jpg' className='w-60 rounded-full flex-shrink-0 border-6 border-white shadow-md'/></div>
    </div>
    
          </div>

  </motion.div>


  </>
  )
}

export default Header