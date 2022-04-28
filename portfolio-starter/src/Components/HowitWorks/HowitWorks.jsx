import React from 'react'
import './HowitWorks.css' 
import HeartEmoji from "../../img/heartemoji.png";
import Card from '../Card/Card';
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

const HowitWorks = () => {
    return (
        <div className="howitworks">

            {/*left side */}
            <div className="nasilCalisir">
                <span>Nasıl Çalışır</span>
                <span>Akademisyen ve öğrencilerin soru-cevaplarını verimli bir şekilde  
                <br/>
                yönetmelerini hedefleyen bir platformdur.</span>
            </div>

            {/*right side */}
            <div className="cards">

                {/*First Card */}
                <div style={{left: '14rem'}}>
                    <Card
                    emoji = {HeartEmoji}
                    heading = {'1'}
                    detail = {"Öğrenciler sorular gönderebilir ve bu sorulara verilen yanıtları düzenlemek için iş birliği yapabilir."}
                    /> 
                </div>

                {/*Second Card */}
                <div style={{top: '12rem', left: '-4rem'}}>
                    <Card
                    emoji = {Glasses}
                    heading = {'2'}
                    detail = {"Eğitmenler ayrıca soruları yanıtlayabilir, öğrenci yanıtlarını onaylayabilir."}
                    /> 
                </div>

                {/*Third Card */}
                <div style={{top: '19rem', left: '19rem'}}>
                    <Card
                    emoji = {Humble}
                    heading = {'3'}
                    detail = {"Eğitmenler yayınlanan herhangi bir içeriği düzenleyebilir veya silebilir."}
                    /> 
                </div>
                <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    );
};

export default HowitWorks