import React from 'react'
import useWindowResize from './windowResize'

const TestuseWindowResize = () => {
    const {width , height} = useWindowResize();
  return (
    <div>
      {`width : ${width} & height : ${height}`}
    </div>
  )
}

export default TestuseWindowResize
