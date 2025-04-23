import { useEffect, useState } from "react";
import { CATEGORY_IMG_URL } from '../utils/constants'
// import appStore from "../utils/appStore"; 
import { addItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const AccordionItem = ({ item, index , showItem, showId, setShowId}) => {
    // subscribing to the store
    const Store = useSelector((store) => store.cart.items);

    // Intializing useDispatch to use later to dispatch an action
    const dispatch = useDispatch();

    // Toggle accordion view
    const ToggleItem = (Id) => {
        setShowId(showId !== Id ? Id : null);
    }

    // click handler to add to cart
    const AddToCart = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div className="flex flex-col w-6/12 text-center mx-auto my-4 bg-white-50 shadow-lg p-4" key={index}>
            <h1 className="text-2xl text-bold cursor-pointer" onClick={()=>ToggleItem(item?.card?.card?.categoryId)}>{item?.card?.card?.title} ({item?.card?.card?.itemCards.length})⬇</h1>
            {
                item?.card?.card?.itemCards?.map?.((subitem, subindex) => {
                    return (
                    showItem &&
                    <div className={`flex justify-center gap-24 my-3 mb-4 mt-4 border-b`} key={subindex}>
                        <div className="w-64 h-16 flex items-center justify-center">
                            <h1 key={subindex}>{subitem?.card?.info?.name}</h1>
                        </div>
                        <div className="flex flex-col justify-center">
                            <img
                                src={CATEGORY_IMG_URL + subitem?.card?.info?.imageId}
                                alt="image"
                                className="w-6/12 mb-2"
                            />
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 w-16 hover:scale-105 transform transition duration-300"
                                onClick={() => AddToCart(subitem?.card?.info)}
                            >
                                Add
                            </button>
                            <p><b>{subitem?.card?.info?.price / 100}&#8377;</b></p>
                        </div>
                    </div>
                    )
                }
                )
            }
        </div>
    )
}

export default AccordionItem;