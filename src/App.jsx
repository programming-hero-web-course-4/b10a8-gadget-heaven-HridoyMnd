import { Outlet } from "react-router-dom"
import Footer from "./assets/Components/Footer/Footer"
import Navbar from "./assets/Components/Navbar/Navbar"
import { createContext, useState } from "react"

 export const myContext = createContext("data")

function App() {
  const [details, setDetails] = useState([])
  const updateData = (newData) => {
    setDetails(newData);
  };
  // console.log(details); 
  return (
    <>
  <myContext.Provider value={{updateData, details}}>
  <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
  </myContext.Provider>
      
    </>
  )
}

export default App
