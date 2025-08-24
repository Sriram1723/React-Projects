import React, { useEffect, useRef, useState } from 'react'

const ScrollToSection = () => {
    const ref = useRef();
    const [currentSection,setCurrentSection] = useState(0);

    useEffect(() => {
        setCurrentSection(0);
    },[])
    useEffect(() => {
        if(ref.current){
            ref.current.scrollIntoView({
                behavior:'smooth',
                block:"start"
            })
        }
    },[currentSection])

    const data = [
        {
            label:'first section',
            style:{
                backgroundColor:"green",
                width:"100%",
                height:"600px",
            }
        },
        {
            label:'second section',
            style:{
                backgroundColor:"red",
                width:"100%",
                height:"600px",
            }
        },
        {
            label:'third section',
            style:{
                backgroundColor:"blue",
                width:"100%",
                height:"600px",
            }
        },
        {
            label:'fourth section',
            style:{
                backgroundColor:"orange",
                width:"100%",
                height:"600px",
            }
        },
        {
            label:'fifth section',
            style:{
                backgroundColor:"purple",
                width:"100%",
                height:"600px",
            }
        }
    ]

    function handleClick(id){
        setCurrentSection(id)
    }
  return (
    <div>
        <div className='links'>
            <ul>
                <li onClick={() => handleClick(0)}>section1</li>
                <li onClick={() => handleClick(1)}>section2</li>
                <li onClick={() => handleClick(2)}>section3</li>
                <li onClick={() => handleClick(3)}>section4</li>
                <li onClick={() => handleClick(4)}>section5</li>
            </ul>
        </div>
        <div className="sections">
            {
                data.map((item,index) => <div ref={ index === currentSection ? ref : null} style={item.style}>{item.label}</div>)
            }
        </div>
    </div>
  )
}

export default ScrollToSection