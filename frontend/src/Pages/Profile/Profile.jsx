import React from 'react'
import './profile.css'
import img from '../../img/student.jpg';
import {BsMouse} from 'react-icons/bs'



function Profile() {
  return (

    <div className='container'>
      <div id='home' className='container header-container'>
        <img src={img} alt='' />
        <h3>
          <p>YASEMİN İLK</p>
          180290001
          <h2>YAZILIM MÜHENDİSLİĞİ</h2>
        </h3>
      </div>

      <div id='home' className='container home-container'>
        <div className='logo'>
          <div className="main-img">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>

          {/* <img src={img} alt='' /> */}
        </div>

        <a href="#footer" className="scroll-down">
          <hr/>
          <h5>scroll down</h5>
          <BsMouse className='scroll'/>
          <hr/>
        </a>
        <h2><span>About Me</span> <br/>
          <p>
            Lorem ipsum dolar sit Lorem ipsum dolar sit
            Lorem ipsum dolar sit Lorem ipsum dolar sit
            Lorem ipsum dolar sit Lorem ipsum dolar sit
            Lorem ipsum dolar sit Lorem ipsum dolar sit
          </p>
        </h2>

        <div className='container button-container'>
          <a href='#about' className='btn-pri'>
            Learn more
          </a>
          <a href='#contact' className='btn-sec'>
            Get in touch
          </a>
        </div>
      </div>

      
      
    </div>   
  )
}

// const toggle = document.querySelector('.main-img');
// toggle.addEventListener('click', () => {
//   toggle.classList.toggle('active')
// });

export default Profile;