import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header.jsx"
import Body from "./components/Body.jsx"
import Footer from "./components/Footer.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Menu from "./components/Menu.jsx"
import Error from "./components/Error.jsx"
import Form from "./components/form_testing.jsx"
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import { resList } from "./utils/mockdata";
import {Provider} from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.jsx"
import Menu from "./components/Menu.jsx"
import UserContext from "./utils/UserContext.js"

/*
*Architecture of project

*App(Main components)
--->Header
        -->Logo
        -->Nav Items
--->Body
        -->Search Bar
        -->Restaurents cards
-->Footer
        -->Copyright
        -->Contact
        -->Address
        -->Links

*/
// practising api call
// const fetchData = async () =>{
//         const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6707668&lng=75.893547&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
//         const json = await data.json();
//         console.log(json);
//       }
      
// useEffect(() => {
//         fetchData();
//       },[]);

const App = () => {

        const [User,SetUser] = useState();

        return (
        <UserContext.Provider value={{name:User,SetUser}}>
                <Provider store={appStore}>
                        <div className="app">
                                <Header/>
                                <Outlet/>
                                <Footer/>
                        </div>
                </Provider>
        </UserContext.Provider>
        )
    }
        
// creating routes

const approute = createBrowserRouter([
        {
                path:"/",
                element : <App/>,
                children:[
                {
                        path:"/restaurant/:resId",
                        element:<Menu />
                },     
                {
                        path:"/",
                        element:<Body/>
                },
                {
                        path:"/About",
                        element:<About/>
                },
                {
                        path:"/Contact",
                        element:<Contact/>
                },
                {
                        path:"/Form",
                        element:<Form/>
                },
                {
                        path:"/Cart",
                        element:<Cart/>
                }
        ], 
                errorElement:<Error/>
        
        },
])
// creating root and rendering it

const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App/>)
root.render(<RouterProvider router={approute}/>)