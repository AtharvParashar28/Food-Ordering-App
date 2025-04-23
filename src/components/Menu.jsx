/*
for every restarant there is different menu page and API. All based on restaurant id
API -> 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.6707668&lng=75.893547&restaurantId='
      +resId+
     '&catalog_qa=undefined&submitAction=ENTER#'
here resId is the id of the restarant that we get from route -> restarant/:resid

how we read resid from route??
using useParams() hook
syntax -> const {resId} = useParams();
useParams() contains an object that stores whatever received from dynamic route
 */

/*
ERROR in API
The error occurs because menu is undefined for some restaurants, meaning that the 
API response doesn't always include the expected data. To fix this issue, 
you should handle cases where menu is undefined before trying to use .map().

 */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API,MENU_IMG_SRC } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import ResCategory from "./RestaurantCategory";


const Menu = () =>{
    const [menu,setMenu] = useState([]);
    const {resId} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(MENU_API + resId)
        .then(response => response.json())
        .then((json) => {
            setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        })
        .catch(error => console.error("Error occured" , error))
    },[]);

    // useEffect(() => {
    //     if(menu !== undefined)
    //         console.log('menu',menu);
    // },[menu]);

    // const fetchData = async() => {
    //     const data = await fetch(MENU_API+resId);
    //     const json = await data.json();
    //     setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]);
    //     // setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel);
    //     // here from 1st index to last index we have categaries in menu page
    // }

    const AddtoCard = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div className="flex flex-row flex-wrap justify-center gap-8 m-4 p-4">
            <ResCategory data={menu}/>
        </div>
    )
}
export default Menu;
