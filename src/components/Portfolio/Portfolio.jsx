import React, { Component } from 'react'
import photo1 from '../../images/poert1.png'
import photo2 from '../../images/port2.png'
import photo3 from '../../images/port3.png'

export default class Portfolio extends Component {
  render() {
    return ( <>
    
    <section className='p-5 mt-5'>
        <div className="container">
            <div className="row g-5 ">
                <div className="col-md-4">
                    <img src={photo1} className="img-fluid" alt=""/>
                </div>
                <div className="col-md-4">
                    <img src={photo2} className="img-fluid" alt=""/>
                </div>
                <div className="col-md-4">
                    <img src={photo3} className="img-fluid" alt=""/>
                </div>
                <div className="col-md-4">
                    <img src={photo1} className="img-fluid" alt=""/>
                </div>
                <div className="col-md-4">
                    <img src={photo2} className="img-fluid" alt=""/>
                </div>
                <div className="col-md-4">
                    <img src={photo3} className="img-fluid" alt=""/>
                </div>
            </div>
        </div>
    </section >
    
    
    
    </>
      
    )
  }
}
