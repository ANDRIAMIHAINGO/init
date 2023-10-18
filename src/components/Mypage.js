import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import '../style/mypage.css'
import nicolas from '../img/nicolas.jpg'
import Footer from '../Footer.js'
import Backhome from './Backhome'

export default function Mypage() {
  return (
    <div className='mypage'>
      <Header/>
      <nav>
        <Backhome/>
      </nav>
      <div className='mycontainerbox'>
          <img  src={nicolas} alt='nicolas' className='myimg'/>
          <div className='mynameandother'>
            <h1>ANDRIAMIHAINGO FANOMEZANTSOA <br/> Ony Tiana Nicolas</h1>
            <p>nyoclass@gmail.com</p>
            <br/>
            <p>Developper web</p>
            <p>Madagascar</p>
            <br/>
            <div className='btninmypage'>

            </div>
          </div>
      </div>
      <div className='mycontainerbox'>

      </div>
      <Footer/>          
    </div>
  )
}
