import { Outlet } from "react-router-dom"
import Footer from "./assets/Components/Footer/Footer"
import Navbar from "./assets/Components/Navbar/Navbar"

function App() {
  return (
    <>
      {/* <h2>Hello World</h2> */}
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
