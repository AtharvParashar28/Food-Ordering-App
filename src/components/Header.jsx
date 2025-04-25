import { LOGO_URL } from "../utils/constants";
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';
import Cart from "./Cart";
import UserContext from "../utils/UserContext";
// import { animate, createScope, createSpring, createDraggable } from 'animejs';

const Header = () => {
    let [log,setlog] = useState('login');

    // using the context
    const {name} = useContext(UserContext);

    // useEffect(
    //     () => {
    //         console.log('user name is',name);
    //     }
    // ,[])

    // Subcribing to the store
    const ItemsinCart = useSelector((store) => store.cart.items);
    // console.log(ItemsinCart)
    
    return (
    <div className="flex flex-row flex-wrap border-8  bg-pink-50 justify-between">
            <div className="border-red-4 p-2">
                <img 
                className="w-32 h-32 rounded-full"
                src={LOGO_URL}
                />
            </div>
            <div className='flex items-center justify-center'>
                <ul className="flex flex-row mr-10">
                    <li className="px-5 hover:bg-black"><Link to='/'>Home</Link></li>
                    <li className="px-5  hover:bg-black"><Link to='about'>About Us</Link></li>
                    <li className="px-5  hover:bg-black"><Link to='contact'>Contact Us</Link></li>
                    <li className="px-5  hover:bg-black">
                        <Link to='cart'>Cart {ItemsinCart.length}</Link></li> 
                        {/* <img width={30} height={30} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_L8twcQy4T3tIkOljFRVndn9rPNldQ29ag&s"/> */}
                    <div className="flex-row px-5">
                        <button id="signup-btn" className=" hover:bg-black" 
                        onClick={()=>{
                            if(log === 'login')
                                setlog("logout");
                            else
                                setlog("Login");
                        }}>{log}</button>
                        <h1>{name}</h1>
                    </div>
                </ul>
            </div>
        </div>
    )
}
export default Header;