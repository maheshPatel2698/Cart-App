import React, {useContext} from "react"
import { FaShoppingBasket} from "react-icons/fa"
import "../CSS/Navbar.css"
import myContext from "../Data/Context"
const Navbar = () => {
  const {cartItems} = useContext(myContext)
  const changeCart = () =>{
    const navElemnt = document.getElementById("bcontainer")
    navElemnt.classList.toggle("opencart")
  }
  return (
    <div className='nav-bar'>
      <div className="left">
        <span >Home</span>
      </div>
      <div className="mid">
        <FaShoppingBasket size={30} onClick={()=>changeCart()} />
      <span className={cartItems.length === 0 ? 'badge rounded-pill bg-warning' : 'badge rounded-pill bg-success'}>{cartItems.length}</span>
      </div>

    </div>
  )
}

export default Navbar