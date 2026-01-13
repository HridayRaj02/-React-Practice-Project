import React, { useEffect, useRef, useState } from 'react'
import sliderimg1 from "../image/slidermyimg1.jpeg"
import sliderimg2 from "../image/slidermyimg2.jpeg"
import sliderimg3 from "../image/slidermyimg3.jpeg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";




function Slider() {

    let sliderData = [
        {
            id: 1,
            text: "MY PRACTICE PROJECT",
            image: sliderimg1
        },
        {
            id: 2,
            text: "WORKING ON IT",
            image: sliderimg2
        },
        {
            id: 3,
            text: "SEE YOU SOON",
            image: sliderimg3
        },
    ]

    let [sliderIndex, setSliderIndex] = useState(0)

    function leftBtn() {
        if (sliderIndex <= 2) {
            setSliderIndex(sliderIndex - 1)
        }
        if (sliderIndex === 0) {
            setSliderIndex(2)
        }

    }

    function RgttBtn() {
        if (sliderIndex >= 0) {
            setSliderIndex(sliderIndex + 1)
        }
        if (sliderIndex === 2) {
            setSliderIndex(0)
        }

    }
    useEffect(() => {
        let interval = setInterval(() => {
            setSliderIndex((prevIndex) =>
                prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className='sllider'>
                <button onClick={leftBtn}><MdKeyboardArrowLeft className='leftbuttonslider' /></button>
                {sliderData.map((item, i) => {
                    return (
                        <>
                            <div className={`${i === sliderIndex ? "active" : "none"}`}>
                                <div className="sliderimg"><img src={item.image} alt="" width="100%" /></div>
                                <div className="sliderhead">{item.text}</div>
                            </div>

                        </>
                    )
                })}
                <button onClick={RgttBtn}><MdOutlineKeyboardArrowRight className='rightbuttonslider' /></button>
            </div>
        </>
    )
}


export default Slider