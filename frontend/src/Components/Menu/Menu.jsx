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
}

const Icon = ({icon}) => (
    <li>
        <a href='/academics'>{icon}</a>
    </li>
);

export default Menu


// import {Navbar, Nav} from 'react-bootstrap';
// import logo from '../../img/logo.png';
// import {Link} from 'react-router-dom';

// function Menu() {
//     return(
//       // <Navbar className='backdrop' variant="dark" expand="lg" >
//       <menu>
//         <img src={logo} alt=''/>
//         <Link className='' to="/">
//           <img className='navbar-logo' src={logo} width='70' alt='logo'></img>
//           <span>Fütag Dergi</span>
//         </Link>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="flex-sm-column">
//             <Link className='nav-link' to="/">Ana Sayfa</Link>
//             <Nav.Link className='nav-link' href="/academics">Sayılar</Nav.Link>
//             <Nav.Link className='nav-link' href="/#spns">Sponsorlar</Nav.Link>
//             <Link className='nav-link' to="/hakkimizda">Hakkımızda</Link>
//             <Nav.Link className='nav-link' href="#contact">İletişim</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </menu>
//     )
// }
// export default Menu

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
}

const Icon = ({icon}) => (
    <li>
        <a href='#xd'>{icon}</a>
    </li>
);
*/