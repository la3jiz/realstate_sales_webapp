import React,{ useState, useEffect } from 'react';
import db from '.././firebase'
import { collection, getDocs } from "firebase/firestore";
import { Link } from 'react-router-dom'; 
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const ListSection =()=>{

  const [documents, setDocuments] = useState([]);
  const[search,setSearch]=useState('')
  // const[len,setLen]=useState('mx-20')

  useEffect(()=>{
    const getData=async ()=>{
      const houseData=await getDocs(collection(db,"houses"))
      setDocuments(houseData.docs.map((doc)=>({...doc.data(), id:doc.id})))
      console.log(houseData)
    }
    getData();
  },[]);

  const filtredDoc=documents.filter((doc)=>{
    if((doc.adress.includes(search))||(doc.price.includes(search))||(doc.type.includes(search))||(doc.plus.includes(search)))
  return true
else
return false})
  
 
  
 
  
 const items=filtredDoc.map((document) => {
          
          return(  <>
 <div className="max-w-sm bg-white shadow-lg sm:mx-4 mx-2 rounded-lg overflow-hidden my-10">
  <div className="xs:px-4 py-2  ">
    <h1 className="text-gray-900 font-bold text-3xl uppercase">{document.plus}</h1>
    <p className="text-gray-600 text-xl ml-1 flex gap-2  mt-1 mb-2">
    <img className='w-4 h-4 mt-2.5' src="https://img.icons8.com/ios-glyphs/50/000000/bed.png"/>
    {document.type}</p>
    <p className='flex gap-1'>
    <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                    <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z"/>
                </svg> {document.adress}</p>
  </div>
  <img className="h-56 w-full object-cover mt-2" src={document.image} alt="NIKE AIR"/>
  <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
    <h1 className="text-gray-200 font-bold text-xl">TND {document.price}</h1>
    <Link to={`/details/${document.id}`} class="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-bold rounded-md">Voir plus</Link>
  </div>
</div>

 
</>
)})


// const handleLength=(doc)=>{
//   if(doc.length===4)
//     setLen("mx-20 w-3/2")
//   else if(doc.length===3)
//   setLen("mx-20 w-1/2")
//   else if(doc.length<3)
//   setLen("mx-20 w-1/2")

// }




           const responsive={
             600:{items:1},
            650:{items:2},
              800: {items:3},
              1024:{items:4},
              1300: {items:5}
            
          }

          

           

return (<>

<section id="services" className=" mx-12 mt-40 mb-24">
  
  <div className=" mx-auto px-12 mb-24 sm:px-6 lg:px-8 text-center">
      <h1 className='text-6xl text-gray-800 '>Listing</h1>
      <p className='pt-2 text-xl mb-16'>Voici ce que nous proposons</p>
      <div class="relative my-2">
        <input onChange={(e)=>setSearch(e.target.value)} type="search" class="bg-purple-white shadow rounded-3xl w-56 focus:w-80 duration-300 border px-6 py-3" placeholder="Rechercher..."/>
      </div>
  </div>



<div data-aos="fade-up"  data-aos-easing="ease-in-sine" className="mx-20">

<AliceCarousel 
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        autoPlay={filtredDoc.length>3? true : false}
        disableButtonsControls    
        responsive={responsive} 
        items={items}/>
      </div>


</section> 









  
        
 
</> )  
               

}
export default ListSection






          
         