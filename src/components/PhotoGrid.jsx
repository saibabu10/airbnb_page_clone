import React from 'react'
import Grid from '/Users/saibabu/Desktop/reactvitefolder/airbnb-project/src/images/Screenshot 2023-05-14 at 12.25.58 PM.png'
export default function PhotoGrid(){
    return(
        <div className='Grid'>
            <img src={Grid} className="gridImage"/>
            <div className='context'>
            <div className="content">Online Experiences</div>
            <div className="description">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</div>
            </div>
        </div>
    )
}