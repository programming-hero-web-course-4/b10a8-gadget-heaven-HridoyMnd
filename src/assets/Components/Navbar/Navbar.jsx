import { Link, useLocation } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { myContext } from "../../../App";
const Navbar = () => {
    //receive cart
    const {cart} = useContext(myContext)
    // receive wishlist
    const {wishList} = useContext(myContext)
    const location = useLocation()
    const isRoot = location.pathname === "/";
    return (
        <section className={`${isRoot?'bg-purple-500 text-white':''}`}>
            <nav className="flex justify-between items-center container mx-auto py-6">
                {/* nav logo part */}
                <div>
                    <h1 className="text-2xl font-bold">Gadget Heaven</h1>
                </div>
                {/* nav menu part */}
                <div className="max-md:hidden">
                    <ul className="flex gap-2">
                        <Link to="/" className={`px-5 py-2 font-medium text-gray-600${isRoot?"text-white":""}`}>Home</Link>
                        <Link to="statistics" className={`px-5 py-2 font-medium text-gray-600${isRoot?"text-white":""}`}>Statistics</Link>
                        <Link to="dashboard" className={`px-5 py-2 font-medium text-gray-600${isRoot?"text-white":""}`}>Dashboard</Link>
                    </ul>
                </div>
                {/* nav button part */}
                <div className="flex gap-4">
                    <button className="bg-white text-gray-600 relative border border-purple-700 h-10 w-10 rounded-full flex justify-center items-center"><LuShoppingCart className="" /><span className="text-purple-800 absolute -top-1 right-2">{cart.length}</span></button>
                    <button className="bg-white text-gray-600 relative border border-purple-700 h-10 w-10 rounded-full flex justify-center items-center"><FaRegHeart className="" /><span className=" text-purple-800 absolute -top-1 right-2 ">{wishList.length}</span></button>
                </div>
            </nav>
        </section>

    );
};

export default Navbar;