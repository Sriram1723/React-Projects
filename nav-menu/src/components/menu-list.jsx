import React from 'react'
import MenuItem from './menu-item'
const MenuList = ({menulist=[]}) => {
  return (
    <div className='menu-list'>
        {
            menulist.map(item =>
            <ul>
                <MenuItem key={item.id} menuitem={item}/>
            </ul>
            )
        }
    </div>
  )
}

export default MenuList
