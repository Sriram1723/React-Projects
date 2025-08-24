import React from 'react'
import useFetch from './useFetchHook'

const TestuseFetch = ({url}) => {
    const {data , loading , error} = useFetch(url)
  return (
    <div>
      {
        error ? <div>{error}</div> :
        loading ? <div>Loading please wait ...</div> : <ul>
            {
                data && data.length>0 ? 
                data.map((item) => <li key={item.id}>{item.title}</li>):<div>please try again ..</div>
            }
        </ul>
      }
    </div>
  )
}

export default TestuseFetch
