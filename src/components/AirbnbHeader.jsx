import React from 'react'
import img1 from '../images/airbnb-2-logo-png-transparent.png'
export default function AirbnbHeader(){
    return(
    <div className="header">
        <img src={img1} className="logo"/>   
    </div>
    )
}