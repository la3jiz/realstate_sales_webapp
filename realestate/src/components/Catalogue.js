import React from 'react'
import AOS from 'aos'

const BodyDesign = () => {
  AOS.init()
  return (
    <section id='catalogue' className=''>
        <div className="text-center mt-40">
     

        </div>
    <div class="flex justify-center items-center">
  
  <div class="2xl:mx-auto 2xl:container mx-4 mb-48 sm:w-auto">
    <div role="main" class="flex mb-24 flex-col items-center justify-center">
           <h1 className='text-6xl text-gray-800 '>Catalogue</h1>
          <p className='pt-2 text-xl'>Notre Catalogue</p>
      
    </div>
    <div data-aos="fade-up" data-aos-offset="500" data-aos-easing="ease-in-sine" class="lg:flex items-stretch md:mt-12 mt-8">
      <div class="lg:w-1/2">
        <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
          <div class="sm:w-1/2 relative">
            <div>
              <div class="absolute bottom-0 left-0 p-6">
                <h2 class="text-xl font-semibold 5 text-white">WWW.ARCHIMOMI.COM</h2>
                <p class="text-base leading-4 text-white mt-2">+216 23123143 / 72277855</p>
               
              </div>
            </div>
            <img src="https://i.ibb.co/DYxtCJq/img-1.png" class="w-full rounded-3xl" alt="chair" />
          </div>
          <div class="sm:w-1/2 sm:mt-0 mt-4 relative">
            <div>
              <div class="absolute bottom-0 left-0 p-6">
                <h2 class="text-xl font-semibold 5 text-white">WWW.ARCHIMOMI.COM</h2>
                <p class="text-base leading-4 text-white mt-2">+216 23123143 / 72277855</p>
               
              </div>
            </div>
            <img src="https://i.ibb.co/3C5HvxC/img-2.png" class="w-full rounded-3xl" alt="wall design" />
          </div>
        </div>
        <div class="relative">
          <div>
            <div class="absolute bottom-0 left-0 md:p-10 p-6">
              <h2 class="text-xl font-semibold 5 text-white">WWW.ARCHIMOMI.COM</h2>
              <p class="text-base leading-4 text-white mt-2">+216 23123143 / 72277855</p>
             
            </div>
          </div>
          <img src="./img/cat2.jpg" alt="sitting place" class="w-full rounded-3xl mt-8 md:mt-6 hidden sm:block" />
          <img class="w-full rounded-3xl mt-4 sm:hidden" src="./img/cat2.jpg" alt="sitting place" />
        </div>
      </div>
      <div class="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
        <div class="relative">
          <div>
            <div class="absolute bottom-0 left-0 md:p-10 p-6">
              <h2 class="text-xl font-semibold 5 text-white">WWW.ARCHIMOMI.COM</h2>
              <p class="text-base leading-4 text-white mt-2">+216 23123143 / 72277855</p>
             
            </div>
          </div>
          <img src="./img/cat3.jpg" alt="sitting place" class="w-full rounded-3xl sm:block hidden" />
          <img class="w-full rounded-3xl sm:hidden" src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="sitting place" />
        </div>
        <div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
          <div class="relative w-full rounded-3xl">
            <div>
              <div class="absolute bottom-0 left-0 p-6">
                <h2 class="text-xl font-semibold 5 text-white">WWW.ARCHIMOMI.COM</h2>
                <p class="text-base leading-4 text-white mt-2">+216 23123143 / 72277855</p>
               
              </div>
            </div>
            <img src="https://i.ibb.co/3yvZBpm/img-5.png" class="w-full rounded-3xl" alt="chair" />
          </div>
          <div class="relative w-full rounded-3xl sm:mt-0 mt-4">
            <div>
              <div class="absolute bottom-0 left-0 p-6">
                <h2 class="text-xl font-semibold 5 text-white">WWW.ARCHIMOMI.COM</h2>
                <p class="text-base leading-4 text-white mt-2">+216 23123143 / 72277855</p>
               
              </div>
            </div>
            <img src="https://i.ibb.co/gDdnJb5/img-6.png" class="w-full rounded-3xl" alt="wall design" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
  )
}

export default BodyDesign