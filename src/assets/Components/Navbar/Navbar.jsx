import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className="border border-sky-400 container mx-auto">
            <nav className="flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-bold">Gadget Heaven</h1>
                </div>
                <div>
                    <ul className="flex gap-2">
                        <Link className="px-5 py-2 font-medium text-gray-600">Home</Link>
                        <Link className="px-5 py-2 font-medium text-gray-600">Statistics</Link>
                        <Link className="px-5 py-2 font-medium text-gray-600">Dashboard</Link>
                    </ul>
                </div>
                <div className="flex gap-4">
                    <button className="border h-10 w-10 rounded-full flex justify-center items-center"><LuShoppingCart className="" /></button>
                    <button className="border h-10 w-10 rounded-full flex justify-center items-center"><FaRegHeart className="" /></button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;