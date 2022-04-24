import React, { useReducer } from 'react'
import Navbar from './Components/Navbar';
import myContext from "./Data/Context"
import BuyContainer from "./Components/BuyContainer"
import Items from "./Data/ItemApi"
import Reducer from "./Data/Reducer"

const App = () => {
  const checkOldData = () => {
    const oldProdct = localStorage.getItem("Items")
    if (oldProdct) {
      return JSON.parse(oldProdct)
    }
    else {
      return []
    }
  }
  const [cartItems, dispatch] = useReducer(Reducer,checkOldData())

  return (
    <myContext.Provider value={
      {
        Items,
        cartItems,
        dispatch,

      }
    }>
      <Navbar />
      <BuyContainer />

    </myContext.Provider>
  )
};

export default App