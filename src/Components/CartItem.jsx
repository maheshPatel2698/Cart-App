import React,{useContext} from 'react'
import { REMOVE_CART } from '../Data/action.type'
import myContext from '../Data/Context'

const CartItem = () => {
  const { cartItems, dispatch } = useContext(myContext)
  return (

    <>
    {cartItems.map((curElem)=>{
      return(
        <div className="main-body" key={curElem.id} >
        <div className="i">
          <img className="img" src={curElem.imgUrl} alt="Error"  />
        </div>
        <div className="sub-body">
          <div className="card-title">Model Name: {curElem.name}  </div>
          <span className="price">Price: {curElem.price} </span>
          <div className="bottom-data">
            <button
              className="btn btn-danger"
          onClick={()=>dispatch({type:REMOVE_CART, payload:curElem.id})}
            >
              Remove
            </button>
  
          </div>
        </div>
      </div>
      )
    })}
    </>
   




  )
}

export default CartItem