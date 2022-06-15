import React from 'react'
import './Settings.css'
import img from '../../img/student.jpg';

function Settings() {
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
      <div className='container settings-container'>
          <div className='settings-links'>
            <a href='#profileSettings' className='settings youtube'>
              <h2>PROFİL</h2>
              <h2>AYARLARI</h2>
            </a>

            <a href='#security' className='settings mail'>
              <h2>GİZLİLİK</h2>
            </a>
          </div>

          <div className='settings-links'>
            <a href='#notification' className='settings youtube'>
              <h2>BİLDİRİMLER</h2>
            </a>

            <a href='#events' className='settings youtube'>
              <h2>ETKİNLİK</h2>
              <h2>GEÇMİŞİ</h2>
            </a>
          </div>
      </div>
    </div>   
  )
}

export default Settings;