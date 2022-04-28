import React from 'react'
import './Navbar.css'
import FuIcon1 from '../../img/icon1.png'

const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="i-icons">
                    <img src={FuIcon1} alt=""></img>
                </div>
                
            </div>
            <div className="n-right">
                <button className="button n-button" >
                    KullanıcıGirişi
                </button>
            </div>
        </div>
    )
}

export default Navbar