import React from 'react'
import MenuList from './menu-list'
import { useState } from 'react'
import {FaPlus , FaMinus} from 'react-icons/fa'

const MenuItem = ({menuitem}) => {
    const [display , setDisplay] = useState(false);
    function displayChildren(){
        setDisplay(!display);
    }
  return (
    <div className='menu-item'>
      <li>{menuitem.label}<span onClick={() => displayChildren()}>{menuitem.children && display ? <FaMinus/> : menuitem.children ? <FaPlus/> : null }</span></li>
      {
        display && menuitem.children && menuitem.children.length > 0 ?
        <MenuList menulist={menuitem.children}/>:null
      }
    </div>
  )
}

export default MenuItem;
