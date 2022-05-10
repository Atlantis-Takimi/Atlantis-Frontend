import React from 'react'
import "./MainContainer.css"
import Banner from "../../img/banner.jpg"
import { FaChevronDown } from "react-icons/fa";

function MainContainer() {
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
                Sorulan Sorular
                <i className="menuChevron" id='menuChevron'>
                  <FaChevronDown/>
                </i>

                <div className="mainContainer" id="mainContainer">
                  <ul>
                    <li>Tüm soruları görüntüle</li>
                    <li>En çok onay alan sorular</li>
                    <li>En az onay alan sorular</li>
                  </ul>
                </div>
              </p>

             {/*} <div className="filters">
                <div className="popular">
                  <p className='filtersName'>Sorulan Sorular<i className="menuChevron" id='menuChevron'>
                    <FaChevronDown/>
                  </i></p>
                </div>

              </div>*/}
            </div>
        </div>
        <div className="right"></div>
    </div>
  )
}

export default MainContainer