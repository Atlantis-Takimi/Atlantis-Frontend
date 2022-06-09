import React from 'react'
import MainContainer from '../MainContainer/MainContainer'
// import Menu from '../Menu/Menu'
import './Container.css'
import TopContainer from "./TopContainer"

function Container() {
  return (
    <div className='container'>
        {/* <Menu/> */}
        <TopContainer/>
        <MainContainer/>
    </div>
  )
}

export default Container