import React, {lazy, Suspense} from "react"
import Header from './components/Header'
import Body from './components/Body'
import About from "./components/About"
// import Contact from "./components/Contact"
// import Cart from "./components/Cart"
import ResturantMenu from "./components/ResturantMenu"

import { createBrowserRouter, Outlet } from "react-router-dom"
import ShimmerUI from "./components/ShimmerUI"
import { Provider } from "react-redux"
import appStore from "./utils/appstore"


// lazy Loading || Dynamic Loading || On-Demand Loading || Chunking || Code Splitting || Dynamic Bundling 

const Offers = lazy(()=>import("./components/Offers"));
const Cart = lazy(()=>import("./components/Cart"));


const App = ()=>{
  return(
    <Provider store={appStore}>
    <div>
      <Header/>
      <Outlet/>
    </div>
    </Provider>
  )
}

export const Router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    // errorElement : <Error/>,
    children : [
      {
        path : "/",
        element : <Body/>,
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path: "/offers",
        element: <Suspense><Offers/></Suspense>
      },
      {
        path:"/cart",
        element: <Suspense><Cart/></Suspense>
      },
      {
        path: "/city/delhi/:resId",
        element: <ResturantMenu />
      }
    ]}
])

export default App