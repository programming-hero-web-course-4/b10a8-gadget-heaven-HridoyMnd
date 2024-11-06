import { Link, useLocation, useNavigate } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { useContext, useState } from "react";
import { myContext } from "../../../App";
import { FaBarsStaggered } from "react-icons/fa6";
const Navbar = () => {
    //receive cart
    const { cart } = useContext(myContext)
    // receive wishlist
    const { wishList } = useContext(myContext)
    const location = useLocation()
    const isRoot = location.pathname === "/";
    // const { goHome } = useContext(myContext)
    const [path, setPath] = useState(0)
    //navbar
    const {isFixed} = useContext(myContext)
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        // {`${isFixed ? 'fixed top-0 w-full backdrop-blur-md z-10' : ''} transition-all duration-300`}
        <section className={`${isFixed ? 'fixed top-0 w-full backdrop-blur-md z-10' : ''} transition-all duration-300 ${isRoot ? 'bg-purple-500 ' : ''}`}>
            <nav className="flex justify-between items-center container mx-auto py-6">
                {/* nav logo part */}
                <div>
                    <h1 className={`text-2xl font-bold ${isRoot ? 'text-white' : ''}`}>Gadget Heaven</h1>
                </div>
                {/* nav menu part */}
                <div className="max-md:hidden">
                    <ul className="flex gap-2">
                        <Link onClick={() => setPath(0)} to="/" className={`px-5 py-2 font-medium ${isRoot ? "text-white" : ""}`}>Home</Link>
                        <Link onClick={() => setPath(1)} to="statistics" className={`${path === 1 ? 'text-purple-600' : ''} px-5 py-2 font-medium ${isRoot ? "text-white" : ""}`}>Statistics</Link>
                        <Link onClick={() => setPath(2)} to="dashboard" className={`${path === 2 ? 'text-purple-600' : ''} px-5 py-2 font-medium ${isRoot ? "text-white" : ""}`}>Dashboard</Link>
                        <Link onClick={() => setPath(3)} to="purchased" className={`${path === 3 ? 'text-purple-600' : ''} px-5 py-2 font-medium ${isRoot ? "text-white" : ""}`}>Purchased</Link>
                    </ul>
                </div>
                {/* nav button part */}
                <div className="flex gap-4 items-center">
                    <div className="relative">
                    <FaBarsStaggered onClick={toggleNavbar} className={`cursor-pointer hidden max-md:flex text-2xl ${isRoot ? 'text-white' : 'text-gray-800'}`} />
                        <ul className={`absolute right-10 bg-gray-600 flex-col max-md:flex hidden ${isOpen ? 'flex' : 'hidden'} text-white`}>
                        <Link onClick={() => { goHome(); toggleNavbar(); }} to="/" className="px-5 py-2 font-medium">Home</Link>
                        <Link onClick={() => { setPath(1); toggleNavbar(); }} to="statistics" className={`${path === 1 ? 'text-purple-600' : ''} px-5 py-2 font-medium`}>Statistics</Link>
                        <Link onClick={() => { setPath(2); toggleNavbar(); }} to="dashboard" className={`${path === 2 ? 'text-purple-600' : ''} px-5 py-2 font-medium`}>Dashboard</Link>
                        <Link onClick={() => { setPath(3); toggleNavbar(); }} to="purchased" className={`${path === 3 ? 'text-purple-600' : ''} px-5 py-2 font-medium`}>Purchased</Link>
                    </ul>
                    </div>
                    <button className="bg-white text-gray-600 relative border border-purple-700 h-10 w-10 rounded-full flex justify-center items-center"><LuShoppingCart className="" /><span className="text-purple-800 absolute -top-1 right-2">{cart.length}</span></button>
                    <button className="bg-white text-gray-600 relative border border-purple-700 h-10 w-10 rounded-full flex justify-center items-center"><FaRegHeart className="" /><span className=" text-purple-800 absolute -top-1 right-2 ">{wishList.length}</span></button>
                </div>
            </nav>
        </section>

    );
};

export default Navbar;