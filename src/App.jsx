import { Outlet } from "react-router-dom"
import Footer from "./assets/Components/Footer/Footer"
import Navbar from "./assets/Components/Navbar/Navbar"
import { createContext, useState } from "react"

export const myContext = createContext("data")

function App() {

 
  //handle addCacrt
  const [cart, setCart] = useState([]);
  const handleAddCart = (newCart) => {
    const isExist = cart.find(prevCart => prevCart.id === newCart.id)
    if (!isExist) {
      setCart([...cart, newCart])
    }
    else {
      alert("Already  Exist")
    }

  };
  // handle AddwishList
  const [wishList, setWishList] = useState([]);
  const handleWishList = (newWish) => {
    const isExist = wishList.find(prevWish => prevWish.id === newWish.id)
    if (!isExist) {
      setWishList([...wishList, newWish])
    }
    else {
      alert("Already  Exist")
    }
  };

  // const [product, setProduct] = useState([])
  const [details, setDetails] = useState([])
  const updateData = (newData) => {
    setDetails(newData);

  };
  return (
    <>
      <myContext.Provider value={{ updateData, details, handleAddCart, cart, handleWishList, wishList }}>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </myContext.Provider>

    </>
  )
}

export default App
