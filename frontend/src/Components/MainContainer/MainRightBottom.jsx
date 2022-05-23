import React from 'react'

function MainRightBottom() {
  return (
    <div className='bottomRightCard'>
      <div className="bottomName">
        <h2>Yaklaşan Etkinlikler</h2>
        {/*<a href='#Etkinlikler'>Tümünü Göster</a>*/}
      </div>

      <div className="events">
        <div className="eventsImg"></div>

          <a href="#btn" className="button1 btn">
            MART <br/>3
          </a>

          <p className="eventsName">
            {" "}
            Sample Name Sample Name<span>Mustafa Ulaş</span>
          </p>
        
      </div>
      
      <div className="bottomName">
        <a href='#Etkinlikler'>Tümünü Göster</a>
      </div>

    </div>
  )
}

export default MainRightBottom