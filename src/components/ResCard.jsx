import { Link } from "react-router-dom";
import { SRC_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch,useSelector } from "react-redux";

// export const {cloudinaryImageId,name,avgRating} = resdata?.data;
const ResCard = (props) => {
  const slice = (useSelector((store)=>store.cart.items))
  const { resdata } = props

  const cloudinaryImageId = resdata?.info?.cloudinaryImageId;
  const name = resdata?.info?.name;
  const avgRating = resdata?.info?.avgRating;
 


  const dispatch = useDispatch();

  const AddtoCart = () =>{
    dispatch(addItem(resdata));
    console.log(slice)
  }

  const RemoveFromCart = () =>{
    dispatch(removeItem(name));
  }

  return (
    <div className="w-64 h-82 border border-gray-300 p-4 rounded-lg shadow-sm flex flex-col items-center">
      <img src={SRC_URL  + cloudinaryImageId} className="mb-4 object-cover w-full h-full"/>
      <h2 className="text-lg font-semibold mb-2">{name} | {avgRating}/5</h2>
    </div>
  )
}

export const PromotedRes = (ResCard) =>{
  return (props)=>{
    return (
      <>
        <ResCard {...props}/>
        <span className="absolute bg-black-200 font-bold mb-8 text-red-700 text-left">Opened</span>
      </>
    )
  }
}

export default ResCard;

