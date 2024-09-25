import React from 'react'
import loader from "../assets/loading.png"

const Loader = () => {
  return (
    <div className='w-full h-[100vh] flex items-center justify-center bg-black'>
        <img src={loader} alt="loading img" />
    </div>
  )
}

export default Loader