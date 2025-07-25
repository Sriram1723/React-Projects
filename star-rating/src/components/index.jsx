import React from 'react'
import { useState } from 'react';
import {FaStar} from 'react-icons/fa';
import './styles.css'
const StarRating = ({noOfStars = 10}) => {
  const [rating,setRating] = useState(0);
  const [hover,setHover] = useState(0);

  function onMouseClick(getCurrentIndex){
    setRating(getCurrentIndex);
  }

  function onMouseMove(getCurrentIndex){
    setHover(getCurrentIndex);
  }

  function onMouseLeave(){
    setHover(0)
  }
  return (
    <div className='star-rating'>
      {
        [...Array(noOfStars)].map((_,index)=>{
          index+=1
            return<FaStar
                  className={(index <= (hover || rating)) ? 'active' : 'inactive'}
                  key={index}
                  size={40}
                  onClick={() => onMouseClick(index)}
                  onMouseMove={() => onMouseMove(index)}
                  onMouseLeave={() => onMouseLeave()}
                />
          })
      }
      <span style={{fontSize:'2vw'}}>{rating}</span>
    </div>
  )
}

export default StarRating;
