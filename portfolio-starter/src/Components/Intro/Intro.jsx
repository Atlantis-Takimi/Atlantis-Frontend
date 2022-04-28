import React from 'react'
import './Intro.css' 
import Image1 from '../../img/1.png'

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Akademisyenler ve öğrenciler </span> 
                    <span>için çevrimiçi soru cevap platformu</span>
                    <span>Öğrencilerin topluluğun gücünü</span> 
                    <span>kullanarak öğrenmelerine</span> 
                    <span>yardımcı olur!</span>
                </div>
                <a href='#index.html'>
                    <button className="button i-button">KULLANICI GİRİŞİ</button>
                </a>
                
            </div>

            <div className="i-right">
                <img src={Image1} alt="" /> 
                <div className="blur" style={{background: "rgb(238 210 255"}}></div>
            </div>
        </div>
    );
};

export default Intro