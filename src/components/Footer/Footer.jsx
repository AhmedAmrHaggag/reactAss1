import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return ( <>
    
    <footer className=" bg-black mt-0 text-white">
            <div className="container py-3">
                <div className="row py-3">
                    <div className="col-sm-4 text-center">
                        <h3>LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className="col-sm-4 text-center">
                        <h3>AROUND THE WEB</h3>
                        <div className="contact-icons1 d-inline-block ">
                            <i className="fa-brands fa-facebook mx-2 fa-6 p-2 rounded-circle border border-5 border.main1"></i>
                           </div>
                           <div className="contact-icons1  d-inline-block ">
                            <i className="fa-brands fa-twitter fa-6 p-2 rounded-circle border border-5 border.main1 mx-2 "></i>
                           </div>
                           <div className="contact-icons1  d-inline-block">
                            <i className="fa-brands fa-instagram center fa-6 p-2 mx-2 rounded-circle border border-5 border.main1  "></i>
                           </div>
                           <div className="contact-icons1  d-inline-block ">
                            <i className="fa-solid fa-globe center mx-2 fa-6 p-2 rounded-circle border border-5 border.main1 "></i>
                           </div>
                    </div>
                    <div className="col-sm-4 text-center">
                        <h3>ABOUT FREELANCER</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                      
                    </div>
                </div>
            </div>
    </footer>
        
    <div className=" bg-dark py-3 text-white text-center mb-0 ">
        <p>Copyright © Your Website 2021</p>
    </div>
    
    
    </>

      
    )
  }
}
