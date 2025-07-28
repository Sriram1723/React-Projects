import sliderData from "../data";
import '../styles.css'
import { useState } from "react";
import {FaArrowAltCircleLeft , FaArrowAltCircleRight} from 'react-icons/fa'

export default function ImageSlider(){
    const [currentSlide, setCurrentSlide] = useState(0);

    function prevButton(current){
        current > 0 ? setCurrentSlide(current-1) : setCurrentSlide(sliderData.length-1);
    }

    function nextButton(current){
        current === sliderData.length-1 ? setCurrentSlide(0) : setCurrentSlide(current+1);
    }
    return(
        <div className="container">
            <div className="title">Image Slider</div>
            <div className="slider-box">
                <button className="previous-button arrow-buttons" onClick={() => prevButton(currentSlide)}><FaArrowAltCircleLeft className="arrows"/></button>
                <button className="next-button arrow-buttons" onClick={() => nextButton(currentSlide)}><FaArrowAltCircleRight className="arrows"/></button>
                <img src={sliderData[currentSlide].url} alt={sliderData.id}/>
                <div className="index-pointer">
                    {
                        sliderData.map((item) =>
                            (
                                <button onClick={() => {setCurrentSlide(item.id-1)}} className={currentSlide === item.id-1 ? 'active' : null }></button>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
}