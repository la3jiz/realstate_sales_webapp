import React from 'react'
import db from '../../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { nanoid } from 'nanoid'
import ProgressBar from "@ramonak/react-progress-bar";



const Add =()=>{
  const Navigate=useNavigate();
const[price,setPrice]=useState()
const[adress,setAdress]=useState()
const[desc, setDesc]=useState()
const[type,setType]=useState()
const[plus,setPlus]=useState()
const[img,setImg]=useState([])
const[imgURL,setImgURL]=useState([])
const[progress,setProgress]=useState(0)


const handleImages=(e)=>{
  for(let i=0;i<e.target.files.length;i++){
    const newImage=e.target.files[i]
    newImage['id']=nanoid()
    setImg((prevState)=>[...prevState,newImage])

  }
}
const barlength=img.length


const handleUpload=()=>{

  const metadata = {
    contentType: 'image/jpeg'
  };
  const promises=[]


  img.map((img,index)=>{
    const storage = getStorage();
  const storageRef = ref(storage, 'images/' + img.name);
  const uploadTask = uploadBytesResumable(storageRef, img, metadata);
  promises.push(uploadTask)
  uploadTask.on('state_changed', 
  (snapshot) => {
   if(index===(barlength-1))
   setProgress(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100))
  }, 

  (error) => {
    }, 
    
 async () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
   await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setImgURL(prevState=>[...prevState, downloadURL]);
    
     
    })}
    )//close of upload task
// close map


  })
  Promise.all(promises)
  .then(()=>{  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Uploaded successfully',
    showConfirmButton: false,
    timer: 1500
  })})
  .catch(err=>console.log(err))
}


const addHandler=()=>{

  const colRef=collection(db,"houses");
    addDoc(colRef,{
      price:price,
      adress:adress,
      description:desc,
      type:type,
      plus:plus,
      image:imgURL[0],
      images:imgURL,
    }).then(()=>{Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'saved successfully',
      showConfirmButton: false,
      timer: 1500
    })
    Navigate("/")})
    .catch((error)=>{Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })})

   
   
  }
  
  
  return <>
  <div className='ml-2'>
    
  <div className='max-w-6xl mx-auto'>
      </div><from>
       <div className='grid grid-cols-1 max-w-4xl gap-x-8 gap-y-6'>
  
  <input type='number' className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-300 focus:border-gray-600" 
  onChange={(e)=>setPrice(e.target.value)} name='price' placeholder='Prix' required />
  
  <input type='text' className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-300 focus:border-gray-600" 
  onChange={(e)=>setAdress(e.target.value)} name='adress' placeholder='Adresse' required />


  <textarea type='text' className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-300 focus:border-gray-600" 
  onChange={(e)=>setDesc(e.target.value)} name='description' placeholder='Description' required ></textarea>
  
  <input type='text' className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-300 focus:border-gray-600" 
  onChange={(e)=>setType(e.target.value)} name='type' placeholder='Type' required />
  
  <input type='text' className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-300 focus:border-gray-600" 
  onChange={(e)=>setPlus(e.target.value)} name='plus' placeholder='Etat' required />
  
  <input type='file' multiple="multiple" className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-300 focus:border-gray-600" 
  onChange={handleImages} name='img' placeholder='Image' required />
<ProgressBar
 bgColor='#22c55e'
 percent={0}
 completed={progress} 
 maxCompleted={100} />
<button onClick={handleUpload} className='inline-block bg-gray-900 hover:bg-gray-700 duration-200 text-white w-32 px-6 py-2 rounded-md shadow-md font-bold'>Upload</button>
<button id='send_mes' className='relative left-96 my-6 w-32 px-6 py-2 rounded-md shadow-md text-white font-bold' onClick={addHandler} type='submit'>Add</button>
</div>
  </from>  
  </div>

   </>
}

export default Add