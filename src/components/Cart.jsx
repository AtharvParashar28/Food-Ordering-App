import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import ResCard from "./ResCard";
import { MENU_IMG_SRC } from "../utils/constants";
import { CATEGORY_IMG_URL } from "../utils/constants";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    // console.log('it is caritem',cartItems);

    const RemovefromCart = (index) => {
        dispatch(removeItem(index))
    }

    const ClearCart = () => {
        dispatch(clearCart())
    }


    console.log(cartItems)
    return (
        <div className="flex flex-col flex-wrap justify-center gap-8 m-4 p-4">
            <div className="flex flex-col gap-4 text-center items-center">
            <h1>Items in cart</h1> 
            {
                (cartItems.length !== 0) ?
                    <button className="px-1 py-1 bg-blue-500 h-10 w-40 text-white text-lg rounded-md shadow-lg hover:bg-blue-600"
                        onClick={ClearCart}>CLEAR CART</button>
                        : "Cart is Empty"
            }
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-8 m-4 p-4">
            {
                cartItems.map((item,index) => (
                    <div className="w-64 h-82 border border-gray-300 p-4 rounded-lg shadow-sm flex flex-col items-center" key={index}>
                        <img src={CATEGORY_IMG_URL + item?.imageId} alt="menu image" className="mb-4 object-cover w-full h-full"/>
                        <h1 className="text-lg font-semibold mb-2">{item?.name}</h1>
                        <h2 className="text-lg font-semibold mb-2"><b>{item?.price / 100} &#8377;</b></h2>
                        <button 
                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center"
                        onClick={() => RemovefromCart(index)}
                        >Remove -</button>
                    </div>
                ))
            }
        </div>
            
        </div>
    )
}

export default Cart;