import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import SlickCards from "./slickCards";
import slick1 from  "../assets/Images/slick1.png.png";
import slick2 from '../assets/Images/slick2.png';
import slick3 from "../assets/Images/slick3.jpg";
import slick4 from "../assets/Images/slick4.png"
import slick5 from "../assets/Images/slick5.png";
import veg2 from "../assets/Images/veg2.png";
import slick7 from "../assets/Images/slick7.png";

import slick8 from '../assets/Images/slick8.png'

const Slick=()=>{
    var settings = {
        
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <>
        <div className="container  slick w-100">
    <Slider {...settings}>
        <div className="p-1  my-5">
            <SlickCards
            Image={slick3}
            description="Big Sale"
            />
        </div>

        <div className="p-1  my-5">
            <SlickCards
            Image={slick8}
            description="Happy Customer"
            />
        </div>

        <div className="p-1 my-5">
            <SlickCards
            Image={slick2}
            description="Hurry Up"
            />
        </div>

        <div className="p-1 my-5">
            <SlickCards
            Image={slick4}
            description="Big Sale"
            />
        </div>

        <div className="p-1 my-5">
            <SlickCards
            Image={slick1}
            description="An Apple a day, keep the doctor away"
            />
        </div>

        <div className="p-1 my-5">
            <SlickCards
            Image={slick5}
            description="Happy Customer"
            />
        </div>

        <div className="p-1 my-5 ">
            <SlickCards
            Image={veg2}
            description="Free Shipping"
            />
        </div>

        <div className="p-1 my-5">
            <SlickCards
            Image={slick7}
            description="Happy Family"
            />
        </div>
    

    </Slider>
        </div>
        </>
    )
}
export default Slick;