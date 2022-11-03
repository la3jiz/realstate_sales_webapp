import React from 'react'

const Logout = ({setAuthenticated}) => {
  return (
<button onClick={()=>{setAuthenticated(false)}} class="border border-red-500 text-red-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline">
    Logout
</button>  )
}

export default Logout