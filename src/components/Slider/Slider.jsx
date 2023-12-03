import React from 'react'
import "./Slider.scss"
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss"
import { useState, useEffect } from 'react';


const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    
    const data = [
        "https://static.zara.net/photos//contents/mkt/spots/aw23-man-studio-collection/layout-campaign//aw23-man-studio-collection.layout-campaign.layout-1920-6ff7b806-841c-4eab-9759-c812ce85886f_0.jpg?ts=1698746915025&imwidth=3826.6666666666665",
        "https://static.zara.net/photos//contents/mkt/spots/aw23-man-studio-collection/layout-campaign//aw23-man-studio-collection.layout-campaign.layout-1920-b78b198d-4d55-4476-875f-5d7d96109beb_0.jpg?ts=1698746915025&imwidth=4153.333333333333",
        "https://static.zara.net/photos//contents/mkt/spots/aw23-man-studio-collection/layout-campaign//aw23-man-studio-collection.layout-campaign.layout-1920-810980e0-8c1e-4aaa-bfe6-556becea8362_0.jpg?ts=1698746915025&imwidth=4480",
    ];

    const prevSlide =() =>{
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1); 
    };
    const nextSlide =() => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };
    
    return (
        <div className="slider">
            <div className="container" style={{transform: `translateX(-${currentSlide *  100}vw)`}}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>

           <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>

                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon/>
                </div>


           </div>

        </div>
    )
}

export default Slider
