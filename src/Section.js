import React from 'react'
import jissoo from './img/jissoo.webp'
import koreanstreet from './img/koreanstreet.jpg'
import {Link} from 'react-router-dom'


export default function Section() {
  return (
    <section>
        <div className='topsectfirst'>
            <Link to='/page1' className='box1link'>
              <div className='box1'>
                <h1>Page 1</h1>
              </div>
            </Link>
            <Link to='/page2' className='box2link'>
              <div className='box2'>
                <h1>Black Page</h1>
              </div>
            </Link>
            <div className='box3'>
            </div> 
        </div>
        <div className='troiddimentionbox'>
            <Link to='/page3'>
              <div className='bigbox1'>
                <img src={jissoo} alt='kim jissoo'/>
              </div>
            </Link>

            <div className='bigbox1'>
            <img src={koreanstreet} alt='kim jissoo'/>
            </div>
            <div className='bigbox1'>

            </div>
            <div className='siteionicon'>

            </div>
        </div>
        {/* <a href="/"><ion-icon name="logo-github"></ion-icon> GitHub</a>
        <a href="/"><ion-icon name="logo-linkedin"></ion-icon>Linkedin</a>
        <a href="/"><ion-icon name="logo-instagram"></ion-icon>Instagram</a>
        <a href="/"><ion-icon name="logo-facebook"></ion-icon>facebook</a> */}
        <div className='youtuberlistroundbox'>

        </div> 
    </section>
  )
}
