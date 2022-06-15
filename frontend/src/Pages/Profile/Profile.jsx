import React from 'react'
import './profile.css'
import img from '../../img/student.jpg';
import {BsMouse} from 'react-icons/bs'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'


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
        <a href="#footer" className="scroll-down">
          <hr/>
          <h5>aşağı kaydırın</h5>
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

        <div className='button-container'>
          <a href='#about' className='btn-pri'>
            Düzenle
          </a>
        </div>
      </div>

      {/* Contact */}

      <div className='container contact-container'>
        <h1>İletişim Bilgilerim</h1>
          <div className='contact-links'>
            <a href='#linkedin' className='contact youtube'>
              <AiOutlineLinkedin  className='icon'/>
              <h2>linkedin <span>Yasmin İlk</span></h2>
            </a>

            <a href='#posta' className='contact mail'>
              <AiOutlineMail  className='icon'/>
              <h2>e-posta <span>yasemin@gmail.com</span></h2>
            </a>

            <a href='#github' className='contact github'>
              <AiOutlineGithub  className='icon'/>
              <h2>github <span>github.com/yasemin</span></h2>
            </a>
          </div>
      </div>      
    </div>   
  )
}

export default Profile;