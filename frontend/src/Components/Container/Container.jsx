import React from 'react'
import MainContainer from '../MainContainer/MainContainer'
import './Container.css'
import TopContainer from "./TopContainer"

function Container() {
  return (
    <div className='container'>
        <TopContainer/>
        <MainContainer/>
    </div>
  )
}

export default Container