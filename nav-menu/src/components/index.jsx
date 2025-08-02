import {menudata} from "./data.js";
import MenuList from "./menu-list.jsx";
import './styles.css'
export default function RecursiveNav(){
    return(
        <>
        <div className="title">Recursive Navigation menu</div>
        <div className="nav-container">
            <MenuList menulist={menudata}/>
        </div>
        </>
    )
}