import React from 'react'
import './Academics.css'

function Academics() {
  return (

    <div className='container'>
      <div id='members' className='container members-container'>
        <h1 className='member-txt'>Akademisyenler</h1>

        <div className='member member-1'>
          <div className='member-img1'></div>
          <div className='member-info'>
            <h1 className='name'>Prof.Dr. Bilal ALATAŞ</h1>
            {/* <h3 className='position'>Çalışma Alanları:</h3> */}
            <h4 className='about'> Veri Madenciliği, Metasezgisel Yöntemler, Kaos, Yapay Öğrenme, Sosyal Ağ Analizi, Optimizasyon</h4>
            <a href='#contact' className='contact-member'>
              <span>İletişime Geç</span>
            </a>
          </div> 
        </div>

        <div className='member member-3'>
          <div className='member-img3'></div>
          <div className='member-info'>
            <h1 className='name'>Mustafa Ulaş</h1>
            {/* <h3 className='position'>Leader</h3> */}
            <h4 className='about'>Veri Madenciliği, Yapay Zeka, Makine Öğrenmesi, Arttırılmış/Sanal Gerçeklik, Big Data, Social Media, Biyoenformatik, Metin/Döküman İşleme </h4>
            <a href='#contact' className='contact-member'>
            <span>İletişime Geç</span>
            </a>
          </div> 
        </div>

        <div className='member member-2'>
          <div className='member-img2'></div>
          <div className='member-info'>
            <h1 className='name'>Doç.Dr. Seda ARSLAN TUNCER</h1>
            {/* <h3 className='position'>Leader</h3> */}
            <h4 className='about'>Genetik Algoritmalar, İşaret İşleme, Örüntü Tanıma, Görüntü İşleme </h4>
            <a href='#contact' className='contact-member'>
            <span>İletişime Geç</span>
            </a>
          </div> 
        </div>

        <div className='member member-3'>
          <div className='member-img4'></div>
          <div className='member-info'>
            <h1 className='name'>Dr.Öğr.Üyesi Özgür KARADUMAN</h1>
            {/* <h3 className='position'>Leader</h3> */}
            <h4 className='about'>Database Management Systems, Programming Languages,Intelligent Vehicle Systems,Safe Drive Assistant Systems,Data Mining, Image Processing,Pattern </h4>
            <a href='#contact' className='contact-member'>
            <span>İletişime Geç</span>
            </a>
          </div> 
        </div>

        <div className='member member-3'>
          <div className='member-img5'></div>
          <div className='member-info'>
            <h1 className='name'>Arş.Gör. Şule KAYA</h1>
            {/* <h3 className='position'>Leader</h3> */}
            <h4 className='about'>Yapay Zeka, Metasezgisel Yöntemler, Sosyal Ağ, Medya Analizi </h4>
            <a href='#contact' className='contact-member'>
            <span>İletişime Geç</span>
            </a>
          </div> 
        </div>

        <div className='member member-3'>
          <div className='member-img6'></div>
          <div className='member-info'>
            <h1 className='name'>Doç.Dr. Fatih ÖZYURT</h1>
            {/* <h3 className='position'>Leader</h3> */}
            <h4 className='about'>Derin Öğrenme, Makine Öğrenmesi, Yapay Zeka, Örüntü Tanıma </h4>
            <a href='#contact' className='contact-member'>
            <span>İletişime Geç</span>
            </a>
          </div> 
        </div>
        
      </div>
    </div>
  )
}

export default Academics