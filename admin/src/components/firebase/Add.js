import React from 'react'
import db from '../../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";



const Add =()=>{
  const Navigate=useNavigate();
const[price,setPrice]=useState()
const[adress,setAdress]=useState()
const[desc, setDesc]=useState()
const[type,setType]=useState()
const[plus,setPlus]=useState()
const[img,setImg]=useState()
const[imgURL,setImgURL]=useState()



const handleUpload=()=>{

  const metadata = {
    contentType: 'image/jpeg'
  };



  console.log(img)
  const storage = getStorage();
  const storageRef = ref(storage, 'images/' + img[0].name);
  const uploadTask = uploadBytesResumable(storageRef, img[0], metadata);

  uploadTask.on('state_changed', 
  (snapshot) => {
   const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 

  (error) => {
    }, 
    
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setImgURL(downloadURL);
      console.log(downloadURL)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Uploaded successfully',
        showConfirmButton: false,
        timer: 1500
      })
     
    })}
    )//close of upload task
// close map

}


const addHandler=()=>{

  const colRef=collection(db,"houses");
    addDoc(colRef,{
      price:price,
      adress:adress,
      description:desc,
      type:type,
      plus:plus,
      image:imgURL,
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
  onChange={(e)=>setImg(e.target.files)} name='img' placeholder='Image' required />

<button onClick={handleUpload} className='inline-block bg-gray-900 hover:bg-gray-700 duration-200 text-white w-32 px-6 py-2 rounded-md shadow-md font-bold'>Upload</button>
<button id='send_mes' className='relative left-96 my-6 w-32 px-6 py-2 rounded-md shadow-md text-white font-bold' onClick={addHandler} type='submit'>Add</button>
</div>
  </from>  
  </div>

   </>
}

export default Add