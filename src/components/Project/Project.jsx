import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default class Project extends Component {
  render() {
    return ( <>
    
    <Navbar/>
    <div>
        <Outlet/>
    </div>
    
    <Footer/>
    
    </>
    
    )
  }
}
