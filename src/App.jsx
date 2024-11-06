import { Outlet } from "react-router-dom";
import Footer from "./assets/Components/Footer/Footer";
import Navbar from "./assets/Components/Navbar/Navbar";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData } from "react-router-dom";

export const myContext = createContext("data");

function App() {
  const navigate = useNavigate();

  // Toast functions
  const NotpurchaseToast = () => toast.warn("You didn't add any product on cart", { position: "top-right" });
  const AddCartToast = () => toast.success("You have added this product on cart", { position: "top-center" });
  const AddwishToast = () => toast.success("You have added this product on wish", { position: "top-center" });
  const AlreadyExistCart = () => toast.error("This product already exists", { position: "top-left" });

  // Local states with persistence
  const [isClicked, setIsClicked] = useState(false);
  const [totalPrice, setTotalPrice] = useState(() => {
    const savedPrice = localStorage.getItem("totalPrice");
    return savedPrice ? JSON.parse(savedPrice) : 0;
});
useEffect(() => {
  localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
}, [totalPrice]);
  
  // Cart state with persistence
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddCart = (newCart) => {
    const isExist = cart.find(prevCart => prevCart.id === newCart.id);
    if (!isExist) {
      setTotalPrice(prevPrice => prevPrice + newCart.price);
      setCart([...cart, newCart]);
      AddCartToast();
    } else {
      AlreadyExistCart();
    }
  };

  const handleSort = () => {
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  };

  const handleRemove = (remove) => {
    const remainingCart = cart.filter(item => item.id !== remove.id);
    setTotalPrice(prevPrice => prevPrice - remove.price);
    setCart(remainingCart);
  };

  // Purchased state with persistence
  const [purchased, setPurchased] = useState(() => {
    const savedPurchased = localStorage.getItem("purchased");
    return savedPurchased ? JSON.parse(savedPurchased) : [];
  });
  
  useEffect(() => {
    localStorage.setItem("purchased", JSON.stringify(purchased));
  }, [purchased]);

  const handleRemovePurchased = (del) => {
    const remain = purchased.filter(due => due.id !== del.id);
    setPurchased(remain);
  };

  // WishList state with persistence
  const [wishList, setWishList] = useState(() => {
    const savedWishList = localStorage.getItem("wishList");
    return savedWishList ? JSON.parse(savedWishList) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  const handleWishList = (newWish) => {
    const isExist = wishList.find(prevWish => prevWish.id === newWish.id);
    if (!isExist) {
      setWishList([...wishList, newWish]);
      setIsClicked(true);
      AddwishToast();
    } else {
      AlreadyExistCart();
    }
  };

  const handleRemoveWish = (removewish) => {
    const remainWish = wishList.filter(item => item.id !== removewish.id);
    setWishList(remainWish);
  };

  // Modal functionality
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/");
    setTotalPrice(0);
    setCart([]);
    setWishList([]);
  };

  const handleGoToHome = () => {
    if (cart.length === 0) {
      NotpurchaseToast();
    } else {
      setIsModalOpen(true);
      setPurchased((prevPurchased) => [...prevPurchased, ...cart]);
    }
  };

  // Details handling
  const [details, setDetails] = useState([]);
  const handleDetails = (newData, info) => {
    setDetails(newData);
    const isExist = wishList.find(prevWish => prevWish.id === newData.id);
    if (!isExist) {
      setIsClicked(false);
    }
  };
  //all data
  const Gadgets = useLoaderData();
  //window scroll
  const [isFixed, setIsFixed] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <myContext.Provider value={{
        isModalOpen, closeModal, totalPrice, handleGoToHome,
        handleDetails, details, handleAddCart, cart, handleWishList,
        wishList, isClicked, handleSort, handleRemove, purchased,
        handleRemovePurchased, handleRemoveWish, Gadgets, isFixed
      }}>
        <Navbar />
        <ToastContainer />
        <Outlet />
        <Footer />
      </myContext.Provider>
    </>
  );
}

export default App;
