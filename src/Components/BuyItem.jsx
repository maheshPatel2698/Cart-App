import React, { useContext, useEffect, useState } from 'react'
import "../CSS/BuyItem.css"
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { ADD_CART } from '../Data/action.type'
import myContext from '../Data/Context'
toast.configure()

const BuyItem = () => {
  const {cartItems} = useContext(myContext)
  const { Items, dispatch } = useContext(myContext)

  const addnewItem = (id, imgUrl, name, price) => {
    const newItem = {
      id,
      imgUrl,
      name,
      price
    }
 
    dispatch(
      {
        type: ADD_CART,
        payload: newItem
      }
    )
  }
  
  useEffect(() => {
   localStorage.setItem("Items", JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <>
      {Items.map((curElem) => {
        return (
          <div className="main-body" key={curElem.id}>
            <div className="i">
              <img className="img" src={curElem.imgUrl} alt="Error" />
            </div>
            <div className="sub-body">
              <div className="card-title">Model Name: {curElem.name}  </div>
              <span className="price">Price: {curElem.price}  </span>
              <div className="bottom-data">
                <button
                  onClick={() => addnewItem(curElem.id, curElem.imgUrl, curElem.name, curElem.price)}
                  className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        )
      })}
    </>

  )
}

export default BuyItem