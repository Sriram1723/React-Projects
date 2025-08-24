import React, { useRef, useState } from 'react'
import useOutsideClickHook from './testOutsiteClick';
const UseOutsideClickHook = () => {
    const [showContent,setShowContent] = useState(false);
    const ref = useRef();
    useOutsideClickHook(ref, () => setShowContent(false))
  return (
    <div>
      {
        showContent ? <div ref={ref} className="content">
            <h1>This is a random content</h1>
            <p>To exit from this content please click outside of the content . Otherwise you can't get off it</p>
        </div>: <button onClick={() => setShowContent(true)}>Show content</button>
      }
    </div> 
  )
}

export default UseOutsideClickHook
