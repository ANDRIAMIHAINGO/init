import React from 'react'
import { Link } from 'react-router-dom'
export default function Backhome() {
  return (
    <Link to='/' className='backhome'>
       <p>Back to home page</p>
    </Link>
  )
}
