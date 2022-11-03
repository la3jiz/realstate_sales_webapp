import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Location = () => {
  return (
    <><section className="pt-24 px-5">
    <div className="text-center">
          <h1 className='text-6xl text-gray-800'>expérience VR</h1>
          <p className='pt-2 text-xl mb-16'>expérience de vie réelle</p>
          </div>
     <div className='grid grid-cols-1 sm:grid-cols-2 gap-12 mt-32 mx-0 sm:mx-12'>
    <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className='max-w-4xl '>
      <iframe className='h-96 w-full rounded-lg' src="https://panoraven.com/en/embed/aSneFtOvsq">
    </iframe>
    </div>
    
    <div data-aos="fade-left" data-aos-easing="ease-in-sine" className='flex flex-col justify-center gap-5'>
    <h1 className='text-center text-4xl font-bold text-gray-800 '>Voir notre produit sous un autre angle</h1>
                <p className='text-xl leading-relaxed'>vivez une expérience réelle avec des images VR et des images 360 et voyez nos produits comme si vous y étiez</p>
    </div>
          </div>
    
        
    </section></>
  )
}

export default Location