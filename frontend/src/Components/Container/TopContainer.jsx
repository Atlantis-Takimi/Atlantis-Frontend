import React from 'react'
import { BiSearchAlt } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import Student from '../../img/student.jpg'


function TopContainer() {
  return (
    <div className='topContainer'>
        <div className='inputBox'>
            <input type='text' placeholder='Arama yapın'/>
            <i>
                <BiSearchAlt/>
            </i>
        </div>
        <div className="profileContainer">
          <i className='profileIcon'>
            <FaBell/>
          </i>

          <div className="profileImage">
            <img src={Student} alt=''></img>
          
          </div>

          <p className="profileName">Yasemin İlk</p>
          {/*<i className="menuChevron" id='menuChevron'>
            <FaChevronDown/>
  </i>*/}


        </div>
    </div>
  )
}

export default TopContainer