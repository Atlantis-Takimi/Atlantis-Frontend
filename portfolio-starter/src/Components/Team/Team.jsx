import React from 'react'
import './Team.css' 
import Merve from "../../img/Merve.png";
import İlker from "../../img/İlker.png";
import Aynur from "../../img/Aynur.png";
import Beyza from "../../img/Beyza.png";

const Team = () => {
    return (
        <div className='team'>
          
            {/*<div className="ourTeam">
                <h4>Ekibimiz<br /></h4>
    </div>*/}

       

          
             
            <div className="team-content">
                <div className="col-md-4 text-center">  
                    <div className="team-circle">
                        <img className="team-circle" src={Merve} alt="" />
                    </div>    
                    <span>Merve BİLGİN</span>        
                </div>
            </div>

            <div className="team-content">
                <div className="col-md-4 text-center">  
                    <div className="team-circle">
                        <img className="team-circle" src={İlker} alt="" />
                    </div>    
                    <span>İsmihan İlker ATİK</span>        
                </div>
            </div>

            <div className="team-content">
                <div className="col-md-4 text-center">  
                    <div className="team-circle">
                    <img className="team-circle" src={Aynur} alt="" />
                    </div>    
                    <span>Aynur ÇELEBİ</span>          
                </div>
            </div>

            <div className="team-content">
                <div className="col-md-4 text-center">  
                    <div className="team-circle">
                    <img className="team-circle" src={Beyza} alt="" />
                    </div>    
                    <span>Beyza AKTÜRK</span>        
                </div>
            </div>
          
        </div>
    )
}

export default Team