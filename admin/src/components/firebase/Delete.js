import React from 'react'
import db from '../../firebase'
import { addDoc, deleteDoc, doc } from 'firebase/firestore'
import Swal from 'sweetalert2'

const Delete =({id})=>{
const deleteHandler=async ()=>{

  const ref=doc(db,"houses",id)

  await deleteDoc(ref)
  .then(()=>Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'deleted successfully',
    showConfirmButton: false,
    timer: 1500
  }))
  .catch(()=>Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'error',
    showConfirmButton: false,
    timer: 1500
  }))
}

 
  return <>
<div>
								
							
  <button className='flex-no-shrink px-5 ml-4 py-2 text-sm shadow-sm font-medium tracking-wider  bg-red-500 hover:bg-red-600 duration-150 text-white rounded-full' onClick={deleteHandler}>Supprimer</button>
  </div>  
   </>
}

export default Delete