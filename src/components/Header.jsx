import { LOGO_URL } from "../utils/constants";
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux';
import Cart from "./Cart";
import UserContext from "../utils/UserContext";
// import { animate, createScope, createSpring, createDraggable } from 'animejs';

const Header = () => {
    // // creating animation 
    // const root = useRef(null);
    // const scope = useRef(null);
    // const [rotations, setRotation] = useState(0);

    // useEffect(()=>{
    //     scope.current = createScope({ root }).add( scope => {
    
    //         // Every anime.js instances declared here are now scopped to <div ref={root}>
      
    //         // Created a bounce animation loop
    //         animate('.logo', {
    //           scale: [
    //             { to: 1.25, ease: 'inOut(3)', duration: 200 },
    //             { to: 1, ease: createSpring({ stiffness: 300 }) }
    //           ],
    //           loop: true,
    //           loopDelay: 250,
    //         });
            
    //         // Make the logo draggable around its center
    //         createDraggable('.logo', {
    //           container: [0, 0, 0, 0],
    //           releaseEase: createSpring({ stiffness: 200 })
    //         });
      
    //         // Register function methods to be used outside the useEffect
    //         scope.add('rotateLogo', (i) => {
    //           animate('.logo', {
    //             rotate: i * 360,
    //             ease: 'out(4)',
    //             duration: 1500,
    //           });
    //         });
      
    //       });
      
    //       // Properly cleanup all anime.js instances declared inside the scope
    //       return () => scope.current.revert()
    // },[])

    // // Handle animation
    // const HandleAnimation = () => {
    //     const i = rotations + 1;
    //     setRotation(i);
    //     // Animate logo rotation on click using the method declared inside the scope
    //     scope.current.methods.rotateLogo(i);
    // }
    // // -----------------------------------------------------
    
    let [log,setlog] = useState('login');

    // using the context
    const {name} = useContext(UserContext);

    useEffect(
        () => {
            console.log('user name is',name);
        }
    ,[])

    // Subcribing to the store
    const ItemsinCart = useSelector((store) => store.cart.items);
    console.log(ItemsinCart)
    
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
                        <Link to='cart'>Cart<img width={30} height={30} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_L8twcQy4T3tIkOljFRVndn9rPNldQ29ag&s"/></Link>{ItemsinCart.length}</li> 
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