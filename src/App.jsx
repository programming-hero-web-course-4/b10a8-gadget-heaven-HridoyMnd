import { Outlet } from "react-router-dom"
import Footer from "./assets/Components/Footer/Footer"
import Navbar from "./assets/Components/Navbar/Navbar"
import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";
//context api create
export const myContext = createContext("data")

function App() {
  //disable
  const [isClicked, setIsClicked] = useState(false);
  //set price 
  const [totalPrice, setTotalPrice] = useState(0);
  //handle addCacrt
  const [cart, setCart] = useState([]);
  const handleAddCart = (newCart) => {
    const isExist = cart.find(prevCart => prevCart.id === newCart.id);
    if (!isExist) {
      setTotalPrice(prevPrice => prevPrice + newCart.price);
      setCart([...cart, newCart]);
    }
    else {
      alert("Already  Exist");
    }
  };

  //handle sort cart
  const handleSort = () => {
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  };

  //remove cart
  const handleRemove = (remove) => {
    const remainingCart = cart.filter(item => item.id !== remove.id)
    setTotalPrice(prevPrice => prevPrice - remove.price);
    setCart(remainingCart)
  };

  //purchased cart 
  const [purchased, setPurchased] = useState([])
  const handleRemovePurchased = (del) => {
    const remain = purchased.filter(due => due.id !== del.id)
    setPurchased(remain)
  };

  // handle AddwishList
  const [wishList, setWishList] = useState([]);
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
    setTotalPrice(0)
    setCart([])
  };
  
  //go to root path
  const navigate = useNavigate()
  const handleGoToHome = () => {
    setIsModalOpen(true);
    setPurchased((prevPurchased) => [...prevPurchased, ...cart]);
  };

  //handle details
  const [details, setDetails] = useState([])
  const handleDetails = (newData) => {
    setDetails(newData);
    const isExist = wishList.find(prevWish => prevWish.id === newData.id)
    if (!isExist) {
      setIsClicked(false)
    }
  };

  return (
    <>
      <myContext.Provider value =
      {{
        isModalOpen, closeModal, totalPrice, handleGoToHome,
         handleDetails, details, handleAddCart, cart, handleWishList,
         wishList, isClicked,  handleSort, handleRemove, purchased, handleRemovePurchased
      }}>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </myContext.Provider>

    </>
  )
}

export default App ;
