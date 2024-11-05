import { Outlet } from "react-router-dom"
import Footer from "./assets/Components/Footer/Footer"
import Navbar from "./assets/Components/Navbar/Navbar"
import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";

export const myContext = createContext("data")

function App() {

  //handle addCacrt
  const [cart, setCart] = useState([]);
  const handleSort = () => {
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  }
    //set price 
    const [totalPrice, setTotalPrice] = useState(0);
  const handleAddCart = (newCart) => {
    const isExist = cart.find(prevCart => prevCart.id === newCart.id)
    if (!isExist) {
      setTotalPrice(prevPrice => prevPrice + newCart.price);
      setCart([...cart, newCart])

    }
    else {
      alert("Already  Exist")
    }
  };
  // handle AddwishList
  const [wishList, setWishList] = useState([]);
  //disable
  const [isClicked, setIsClicked] = useState(false);

  const handleWishList = (newWish) => {
    const isExist = wishList.find(prevWish => prevWish.id === newWish.id)
    if (!isExist) {
      setWishList([...wishList, newWish])
      setIsClicked(true)

    }
    else {
      alert("Already  Exist")
    }
  };
    //modal part
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => {
        setIsModalOpen(false);
        navigate("/");
        setCart([])
        setTotalPrice(0)
    };
  //go to root path
  const navigate = useNavigate()
  const handleGoToHome = () => {
      setIsModalOpen(true);
  };

  // const [product, setProduct] = useState([])
  const [details, setDetails] = useState([])
  const updateData = (newData) => {
    setDetails(newData);
    const isExist = wishList.find(prevWish => prevWish.id === newData.id)
    if (!isExist) {
      setIsClicked(false)
    }
  };

  return (
    <>
      <myContext.Provider value={{isModalOpen, closeModal
        , totalPrice, handleGoToHome, updateData, details, handleAddCart, cart, handleWishList, wishList, isClicked, handleSort }}>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </myContext.Provider>

    </>
  )
}

export default App
