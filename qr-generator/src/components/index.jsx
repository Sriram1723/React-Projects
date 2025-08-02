import React, { useState } from 'react'
import './styles.css'
import QRCode from 'react-qr-code'
const QrGenerator = () => {
    const [input,setInput] = useState('')
  return (
    <div className='container'>
        <div className='input-section'>
            <input type='text' value={input} onChange={ (e) =>
                setInput(e.target.value)
            } placeholder='enter here'/>
        </div>
      <QRCode value={input} size={300}/>
    </div>
  )
}

export default QrGenerator
