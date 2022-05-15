import React, {useEffect} from 'react'
import "./MainContainer.css"
import Banner from "../../img/banner.jpg"
import { FaChevronDown } from "react-icons/fa";
import CardMain from './CardMain';
import MainRightTop from './MainRightTop';
import MainRightBottom from './MainRightBottom';

function MainContainer() {

  useEffect(() =>{
    const menuTarget = document.getElementById("menuChevron");
    const mainContainer = document.getElementById("mainContainer");

    menuTarget.addEventListener('mouseenter', () => {
      menuTarget.style.transform = "rotate(180deg)";
      mainContainer.style.transform = "translateX(0px)";
    });

    mainContainer.addEventListener('mouseleave', () => {
      menuTarget.style.transform = "rotate(0deg)";
      mainContainer.style.transform = "translateX(-380px)";
    });

  }, [] );

  return (
    <div className='mainContainer'>

        <div className="left">
        {/**/}
            <div 
            className="banner" 
            style={{
              background: `url(${Banner})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
                <div className="textContainer">
                  <h1>Round Hall</h1>
                  <h2>1.5 ETH</h2>
                  <p>Uploaded by Alexander Vernof</p>
                  <div className="bid">
                    <a href="#y" className="button1">
                      Bid now
                    </a>
                    <p>
                      Ending In <span>2d:15h:20m</span>
                    </p>
                  </div>
                </div>
            </div>

            <div className="cards">

              <p className='filtersName'>
              <i className="menuChevron" id='menuChevron'>
                  <FaChevronDown/>
                </i>
                Sorulan Sorular
                <div className="mainContainer" id="mainContainer">
                  <ul>
                    <li>Tüm soruları görüntüle</li>
                    <li>En çok onay alan sorular</li>
                    <li>En az onay alan sorular</li>
                  </ul>
                </div>
              </p>

              <main>
                <CardMain title={"İlker Atik"} tick={"10"}/>
                <CardMain title={"Beyza Aktürk"} tick={"20"}/>
                <CardMain title={"Aynur Çelebi"} tick={"30"}/>
                <CardMain title={"İlker Atik"} tick={"10"}/>
                <CardMain title={"Beyza Aktürk"} tick={"20"}/>
                <CardMain title={"Aynur Çelebi"} tick={"30"}/>

              </main>
            </div>
        </div>
        <div className="right">
          <MainRightTop/>
          <MainRightBottom/>
        </div>
    </div>
  )
}

export default MainContainer