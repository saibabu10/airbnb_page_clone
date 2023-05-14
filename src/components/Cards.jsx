import React from 'react'
import Star from '../images/Screenshot 2023-05-14 at 4.51.28 PM.png';
import Img1 from '../images/image 12swimmer.png'
import Img2 from '../images/wedding-photography 1.png'
import Img3 from '../images/mountain-bike 1.png'
export default function Cards(props){
    let image
    if(props.imageText==="Swimmer"){
        image=Img1
    }
        else if(props.imageText==="Wedding"){
            image=Img2
        }
        else{
            image=Img3
        }
        let value
        if(props.openSpots===0)
        value="SOLD OUT"
        else if(props.openSpots===27)
        value="AVAILABLE"
        else
        value="AVAILABLE"
    return(
        <div className="container">

       {<img src={image} className="profile-img"/> }
      <div className='status'> {value}</div>
        <div className="rating"> 
        <img src={Star} className="star"/> 
            {props.rating}<div className='reviewCount'>({props.reviewCount})</div>
            <div className="location">{props.location}</div>
            </div>
            <span className="about">{props.title}</span>
            <div className="pricing">
                <span className='amount'>${props.price}</span>
               <span className="type"> /person</span>
            </div>
           
        </div>
    )
}