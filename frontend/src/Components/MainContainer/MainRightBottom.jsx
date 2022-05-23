import React from 'react'
import Events from './Events'

function MainRightBottom() {
  return (
    <div className='bottomRightCard'>
      <div className="bottomName">
        <h2>Yaklaşan Etkinlikler</h2>
        {/*<a href='#Etkinlikler'>Tümünü Göster</a>*/}
      </div>

      {Events &&
        Events.map((events) => (
          <div className="events" key={events?.id}>

              <a href="#btn" className="button1 btn">
                {events?.events_date}<br/>{events?.events_day}
              </a>

              <p className="eventsName">            
                {events?.events_name}<span>{events?.user_name}</span>
              </p>
        
          </div>
      ))}
      
      <div className="bottomName">
        <a href='#Etkinlikler'>Tümünü Göster</a>
      </div>

    </div>
  )
}

export default MainRightBottom