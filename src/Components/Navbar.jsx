
import { FaShoppingBasket} from "react-icons/fa"
import "../CSS/Navbar.css"


const Navbar = () => {

  return (
    <div className='navbar'>
      <div className="left">
        <span >Home</span>
      </div>
      <div className="mid">
        <FaShoppingBasket size={30} />
      </div>

    </div>
  )
}

export default Navbar