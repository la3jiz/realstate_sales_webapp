import React from 'react'

const Services = () => {
  return (
<section id="services" className="px-5 mt-16 mb-32">
  
  <div className="text-center">
    <h1 className='text-6xl text-gray-800'>Services</h1>
    <p className='pt-2 text-xl '>Que vous achetiez, vendiez ou louiez,<br/> nous pouvons vous aider à aller de l'avant.</p>

  </div>
<div className="grid mt-16">
<div id='tech' className="justify-self-center w-max grid gap-20 md:grid-cols-3 sm:grid-rows-1">

<div data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" className='w-64 h-64 shadow-lg ease-in duration-200 rounded-2xl'>
<div className='justify-self-center ml-10 mt-8 w-40 h-16 flex justify-center items-center'> 
<img src="serv1.png" alt='service' className='relative inset-0 '/></div>
<div>
<h2  className='font-bold text-center pt-2 text-2xl text-gray-800'>
Acheter
          </h2>
          <p className='mx-8 my-2'>Trouve ta place avec nous avec GIRALDA</p>
          </div>
</div>
<div data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" className='w-64 h-64 shadow-lg ease-in duration-200 rounded-2xl'>
<div className='justify-self-center ml-10 mt-8 mt w-40 h-16 flex justify-center items-center'> 
<img src="serv2.png" alt='service' className='relative inset-0'/></div>
<div>
<h2 className='font-bold text-center pt-2 text-2xl text-gray-800'>
            Louer
          </h2>
          <p className='mx-8 my-2'>Trouver le bien locatif parmi le plus grand réseau de biens locatifs</p>
          </div>

</div>      
<div data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" className='w-64 h-64 shadow-lg ease-in duration-200 rounded-2xl'>
<div className='justify-self-center ml-10 mt-8 mt w-40 h-16 flex justify-center items-center'> 
<img src="serv3.png" alt='service' className='relative inset-0'/></div>
<div>
<h2 className='font-bold text-center pt-2 text-2xl text-gray-800'>
            Vendre
          </h2>
          <p className='mx-8 my-2'>Avec GIRALDA vous aurez une vente réussie sur votre propriété</p>
          </div>
</div>


</div>
</div>
</section>  )
}

export default Services