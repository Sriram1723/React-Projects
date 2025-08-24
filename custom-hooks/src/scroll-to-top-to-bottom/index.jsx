import React, { useRef } from 'react'
import useFetch from '../components/useFetchHook'

const ScrollToTopToBottom = ({url}) => {

  const bottomRef = useRef(null);
  const {data,loading,error} = useFetch(url)
  function handleScrollToBottom(){
    bottomRef.current.scrollIntoView({behavior:'smooth'})
  }

  function handleScrollToTop(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  return (
    <div className='wrapper'>
      <h2>Scroll to top to bottom by clicking the buttons</h2>
      <div>This is the top section</div>
      <button onClick={() => handleScrollToBottom()}>Scroll to bottom</button>
      {
        error ? <div>{error}</div> :
        loading ? <div>Loading please wait ...</div> : <ul style={{listStyleType:'none'}}>
            {
                data && data.length>0 ? 
                data.map((item) => <li key={item.id}>{item.title}</li>):<div>please try again ..</div>
            }
        </ul>
      }
      <button onClick={() => handleScrollToTop()}>Scroll to Top</button>
      <div ref={bottomRef}>This is the bottom section</div>
    </div>
  )
}

export default ScrollToTopToBottom
