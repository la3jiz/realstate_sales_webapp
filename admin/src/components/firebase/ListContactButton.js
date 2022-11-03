import React from 'react'
import { Link } from 'react-router-dom'

const ListContactButton = () => {
  return (
<>


<Link to="/contactlist" className="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
    Lister les Contacts
</Link>



</>  )
}

export default ListContactButton