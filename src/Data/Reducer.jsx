
import { ADD_CART, REMOVE_CART, BUY_NOW } from "../Data/action.type"
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"
toast.configure()

const Reducer = (state, action) => {
    switch (action.type) {
        case ADD_CART:
            return [...state, action.payload]
        case REMOVE_CART:
            return state.filter((item) => item.id !== action.payload)
        case BUY_NOW:
            return state = []
        default:
            return state
    }
}
export default Reducer;
