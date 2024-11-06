import { Outlet } from "react-router-dom"
import Footer from "./assets/Components/Footer/Footer"
import Navbar from "./assets/Components/Navbar/Navbar"
import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//context api create
export const myContext = createContext("data")

function App() {
  //toastify
  const NotpurchaseToast = () =>
    toast.warn("You didn't add any product on cart", {
      position: "top-right"
    });
    //add cart toast
  const AddCartToast = () =>
    toast.success("You have added this product on cart", {
      position: "top-center"
    });
    ///wisht toast
  const AddwishToast = () =>
    toast.success("You have added this product on wish", {
      position: "top-center"
    });
    // already exist
  const AlreadyExistCart = () =>
    toast.error("This product already exist", {
      position: "top-left"
    });
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
      AddCartToast()
    }
    else {
      AlreadyExistCart()
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
      AddwishToast()
    }
    else {
      AlreadyExistCart()
    }
  };
  //handle remove wish
  const handleRemoveWish = (removewish) => {
    const remainWish = wishList.filter(item => item.id !== removewish.id)
    setWishList(remainWish)
  }
  //modal part
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/");
    setTotalPrice(0)
    setCart([])
    setWishList([])
  };
  
  //go to root path
  const navigate = useNavigate()
  const handleGoToHome = () => {
    if(cart.length === 0) {

      NotpurchaseToast()
    }
    else{
      setIsModalOpen(true);
      setPurchased((prevPurchased) => [...prevPurchased, ...cart]);
    }
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
         wishList, isClicked,  handleSort, handleRemove, purchased, 
         handleRemovePurchased, handleRemoveWish
      }}>
        <Navbar></Navbar>
        <ToastContainer></ToastContainer>
        <Outlet></Outlet>
        <Footer></Footer>
      </myContext.Provider>

    </>
  )
}

export default App ;
