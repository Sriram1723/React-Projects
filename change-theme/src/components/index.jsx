import React, { useState } from 'react'

const ChangeTheme = () => {
    const [theme,setTheme] = useState(localStorage.getItem('theme'));
    function changeTheme(){
        theme === 'light'?
        setTheme('dark'):
        setTheme('light')
    }
    localStorage.setItem('theme',theme);
  return (
    <div className='container' style={{
        width:'100vw',
        height:'100vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: theme === 'light' ? 'white' : 'black'
    }}>
      <h1 
      style={{color: theme === 'light' ? 'black' : 'white'}}>
        Welcome to my project</h1>
      <button 
      style={{color : theme === 'light' ? 'white' : 'black',
        backgroundColor:theme === 'light' ? 'black' : 'white',
        fontSize:'1vw'}}
      onClick={ () => changeTheme()}>{
        theme === 'light' ? 'Dark theme' : 'Light theme'
      }</button>
    </div>
  )
}

export default ChangeTheme
