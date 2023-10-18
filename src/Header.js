import React from 'react'
import cahier from './img/cahier.gif'
import {Link} from 'react-router-dom'
export default function Header() {
  return (
     <header>
       <Link to='/mypage' className='linkmypage'>
         <div className='myname'>
            <img src={cahier} alt='svg'/>
            <h1>Andriamihaingo Nyoclass</h1>
         </div>
       </Link>

       <div className='searchbox'>
          <input type='search' placeholder='Search for more content'/>  
       </div>
       <div className='rigthheader'>
          <Link to='/' className='linkedin'>
            <ion-icon name="logo-linkedin"></ion-icon>
            <p>Linkedin</p>
          </Link>
          <Link to='/' className='Githublinkbtn'>
             <ion-icon name="logo-github"></ion-icon>
             <p>GitHub</p>
          </Link>
       </div>
     </header>
  )
}
