import React, {useEffect} from 'react'
import './Menu.css'
// import Logo from '../../img/logo.png'
import {FaDelicious, FaEnvelopeOpenText, FaGraduationCap, FaCalendar, FaCog, FaSignOutAlt} from 'react-icons/fa';
import {AiFillBook, AiFillQuestionCircle} from "react-icons/ai";

// function Menu() {

  // useEffect(() =>{
  //   const mainMenuLi = document
  //     .getElementById("mainMenu")
  //     .querySelectorAll("li");

  //   function changeActive() {
  //     mainMenuLi.forEach(n => n.classList.remove("active"));
  //     this.classList.add("active");
  //   }

  //   mainMenuLi.forEach(n => n.addEventListener('click', changeActive ))
  // }, []);

//   return (
//     <menu>
//         <img src={Logo} alt=''/>

        // <ul id='mainMenu' >
      
        //   <Icon icon={<FaDelicious />}/>
        //   <Icon icon={<AiFillBook/>}/>
        //   <Icon icon={<FaEnvelopeOpenText/>}/>
        //   <Icon icon={<FaGraduationCap/>}/>
        //   <Icon icon={<FaCalendar/>}/>
        //   <Icon icon={<AiFillQuestionCircle/>}/>
        // </ul>

        // <ul className='lastMenu'>
        //   <Icon icon={<FaCog/>}/>
        //   <Icon icon={<FaSignOutAlt/>}/>
        // </ul>
//     </menu>
//   )
// }

// const Icon = ({icon}) => (
//     <li>
//         <a href='/academics'>{icon}</a>
//     </li>
// );

// export default Menu


import logo from '../../img/logo.png';
import {Link} from 'react-router-dom';


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
  
  return(
    <menu>
      <Link className='' to="/">
        <img src={logo} alt=''/>
        {/* <img src={logo} width='70' alt=''></img> */}
      </Link>
        
      <ul id='mainMenu' > 
        <li>
          <a href='/mainContainer' exact element>{<FaDelicious />}</a>
        </li>
        <li>
          <a href='/lessons'>{<AiFillBook/>}</a>
        </li>
        <li>
          <a href='/questionsAnswers'>{<FaEnvelopeOpenText/>}</a>
        </li>
        <li>
          <a href='/academics'>{<FaGraduationCap/>}</a>
        </li>
        <li>
          <a href='/events'>{<FaCalendar/>}</a>
        </li>
        <li>
          <a href='/helpCenter'>{<AiFillQuestionCircle/>}</a>
        </li>
      </ul>

      <ul className='lastMenu'>
        <li>
          <a href='/settings'>{<FaCog/>}</a>
        </li>
        <li>
          <a href='/logOut'>{<FaSignOutAlt/>}</a>
        </li>
      </ul>
       
    </menu>
    )
}

export default Menu

/*
return (
    <menu>
        <img src={Logo} alt=''/>

        <ul id='mainMenu' >
      
          <Icon icon={<FaDelicious />}/>
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
}*/

// const Icon = ({icon1}) => (
//     <li>
//         <a href='#xd'>{icon1}</a>
//     </li>

// );

