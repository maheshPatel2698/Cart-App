import React from 'react'
import BuyItem from './BuyItem'
import "../CSS/BuyContainer.css"
import Cart from './Cart'

const BuyContainer = () => {

  return (
    <div className='main-component'>
      <div className="itemContainer">
        <BuyItem />
      </div>
      <Cart />
    </div>

  )
}

export default BuyContainer