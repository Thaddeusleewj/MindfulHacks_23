import React from 'react'
import Navbar from './components/Navbar.jsx'
import Recording from './components/Recording.jsx'

const Homepage = () => {
  return (
    <div className='flex w-full'>
      <Navbar />
      <Recording />
    </div>
  )
}

export default Homepage