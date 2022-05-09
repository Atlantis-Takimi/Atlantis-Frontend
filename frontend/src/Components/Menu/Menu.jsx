import React, {useEffect} from 'react'
import './Menu.css'
import Logo from '../../img/logo.png'
import {FaDelicious, FaEnvelopeOpenText, FaGraduationCap, FaCalendar, FaCog, FaSignOutAlt} from 'react-icons/fa';
import {AiFillBook, AiFillQuestionCircle} from "react-icons/ai";

function Menu() {

  useEffect(() =>{
    const mainMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");

    function changeActive() {
      mainMenuLi.forEach(n => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainMenuLi.forEach(n => n.addEventListener('click', changeActive ))
  }, []);

  return (
    <menu>
        <img src={Logo} alt=''/>

        <ul id='mainMenu'>
          <Icon icon={<FaDelicious/>}/>
          <Icon icon={<AiFillBook/>}/>
          <Icon icon={<FaEnvelopeOpenText/>}/>
          <Icon icon={<FaGraduationCap/>}/>
          <Icon icon={<FaCalendar/>}/>
          <Icon icon={<AiFillQuestionCircle/>}/>
        </ul>

        <ul className='lastMenu'>
          <Icon icon={<FaCog/>}/>
          <Icon icon={<FaSignOutAlt/>}/>
        </ul>
    </menu>
  )
}

const Icon = ({icon}) => (
    <li>
        <a href='#xd'>{icon}</a>
    </li>
);

export default Menu