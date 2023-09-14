import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return ( <>
    
    
    <section class="text-center bg-white mt-5 py-5">
        <h2 class="text-black">CONATCT SECTION</h2>
        <div class="container py-5  ">
            <input type="text" placeholder="userName" class="w-50 border border-0  bg-transparent"/>
            <hr class="w-50 mx-auto text-black" />
            <input type="text" placeholder="userAge" class="w-50 border border-0  bg-transparent"/>
            <hr class="w-50 mx-auto text-black"/>
            <input type="text" placeholder="userEmail" class="w-50 border border-0  bg-transparent"/>
            <hr class="w-50 mx-auto text-black"/>
            <input type="text" placeholder="userPassword" class="w-50 border border-0  bg-transparent"/>
            <hr class="w-50 mx-auto text-black"/>
            <button class="btn btn-success">send Message</button>
        </div>
    </section>
    
    
    
    </>
     
    )
  }
}
