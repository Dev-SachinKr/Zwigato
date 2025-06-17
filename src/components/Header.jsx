import { logo_URL } from "../utils/constants"
import {useState} from "react"
import { NavLink } from "react-router-dom"
import { useOnlineStatus } from "../utils/customHook"
import { useSelector } from "react-redux"
const Header = () =>{

    const [loginButton, setLoginButton] = useState("Login")
    const onlineStatus = useOnlineStatus()

    // Selector (Redux)
    const cartItems = useSelector((store => store.cart.items))
    // console.log(cartItems)

    return(
        <div className="flex justify-around space-x-40 bg-gray-800 items-center p-2 pr-10 pl-5 mb-2 text-neutral-50 text-xl">
            <div className="w-20 ">
                <img className="rounded-full content-center" src={logo_URL} alt="logo" />
            </div>
            <div className="flex">
                <ul className="flex space-x-6 "> 
                    <li className="p-3 ">Online Status {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="hover:bg-gray-950 p-3 rounded-xl"><NavLink to="/">Home</NavLink></li>
                    <li className="hover:bg-gray-950 p-3 rounded-xl"><NavLink to="/about">About</NavLink></li>
                    <li className="hover:bg-gray-950 p-3 rounded-xl"><NavLink to="/offers">Offers</NavLink></li>
                    <li className="hover:bg-gray-950 p-2 rounded-xl text-2xl font-bold"><NavLink to="/cart">Cart🛒 ({cartItems.length}) items</NavLink></li>
                    {/* <button className="hover:bg-gray-950 rounded-xl cursor-pointer" onClick = {()=>{loginButton === "Login" ? setLoginButton("Logout") : setLoginButton("Login")}}>{loginButton}</button> */}
                </ul>
            </div>
        </div>
    )
}

export default Header