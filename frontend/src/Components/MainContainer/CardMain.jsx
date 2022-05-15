import React from 'react'
import { TiTick } from "react-icons/ti";

function CardMain({title, tick}) {
  return (
    <div className='card_main'>
        <div className="card_main_name">
          <h2>{title}</h2>
          <div className="card_icon">
            <i>
              {" "}
              <TiTick/> 
              <span>{tick}</span>{" "}
            </i>
          </div>
        </div>

        <div className="stats">
          <p>Yapay Zeka ve Uzman Sistemler</p>
          <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been....</span>
        </div>

        <div className="card_button">
          <a href="#detay" className="button2 btn">Detaylı incele</a>
        </div>   
    </div>
  )
}

export default CardMain