import React, { useState } from 'react'
import './styles.css'
function RandomComponent(){
    return <h1>This is for Tab 3.</h1>
}

const Tabs = () => {

    const [currentIndex,setCurrentIndex] = useState(0);
    function handleClick(index){
        setCurrentIndex(index);
        console.log(index);
    }

    const tabs = [{
        label:'Tab1',
        content:<div>This is content for tab 1.</div>   
    },
    {
        label:'Tab2',
        content:<div>This is contentfor tab 2.</div>
    },
    {
        label:'Tab3',
        content:<RandomComponent/>
    }
]
  return (
    <div className='container'>
        <div className="heading">
            {
                tabs.map((item,index) => <div className={currentIndex === index ? 'active' : 'inactive'} onClick={() =>handleClick(index)} key={item.label}>{item.label}</div>)
            }
        </div>
        <div className="content">
            {
                tabs[currentIndex] && tabs[currentIndex].content
            }
        </div>
    </div>
  )
}

export default Tabs;
