import React, { Component } from 'react'
import './home.css'
import photo from '../../images/avataaars.svg'

export default class Home extends Component {
  render() {
    return (
      <div class="bg-success text-center pt-3 mt-5">
        <img class="w-25" src={photo} alt=""/>
        <h2 class=" pt-5">START FRAMEWORK</h2>
        <p className='py-3 mb-0'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    )
  }
}
