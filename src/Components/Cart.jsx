import React, { useContext } from 'react'
import CartItem from './CartItem'
import "../CSS/Cart.css"
import myContext from '../Data/Context'
import { FaShoppingCart } from "react-icons/fa"
import "bootstrap/dist/css/bootstrap.min.css"
import { BUY_NOW } from '../Data/action.type'
import { toast } from 'react-toastify'
const Cart = () => {

  const { cartItems, dispatch } = useContext(myContext)
  let Total = 0;
  cartItems.forEach((item) => {
    Total = parseFloat(Total) + parseFloat(item.price)
  })
  const handleBuy = () => {
    dispatch({ type: BUY_NOW })
    return toast.success("Purchase SuccesFull", { autoClose: 500, position: "top-center" })

  }
  return (
    <div>
      <div className='bcontainer'>
        {cartItems.length === 0 ? (<h1>Your Cart is Empty</h1>) : (<CartItem />)}
        <div className="bottom-cart-data">
          <div className="right">
            <FaShoppingCart size={30} />
            <span className={cartItems.length === 0 ? 'badge rounded-pill bg-warning' : 'badge rounded-pill bg-success'}>{cartItems.length}</span>
          </div>
          <span>Total: {Total}</span>
          <button className='btn btn-success m-1'
            onClick={() => handleBuy()}
          >Buy Now</button>
        </div>
      </div>
      
    </div>


  )
}


export default Cart