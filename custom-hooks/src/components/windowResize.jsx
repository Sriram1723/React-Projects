import { useEffect, useState } from "react";
const useWindowResize = () => {
    const [windowSize,setWindowSize] = useState({
        width:0,
        height:0
    })
    const handler = () => {
        setWindowSize({
            width:window.innerWidth,
            height:window.innerHeight
        })
    }
  useEffect(()=>{
    handler();

    window.addEventListener('resize',handler)

    return () => {
        window.removeEventListener('resize',handler)
    }
    //eslint-disable-next-line
  },[])
  return windowSize;
}

export default useWindowResize;
