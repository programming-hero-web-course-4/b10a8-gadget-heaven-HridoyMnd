import { useEffect, useState } from "react";

import Cart from "./Cart/Cart";
import WishList from "./WishList/WishList";

const Dashboard = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title])
    //cart and wishlist button state
    const [active, setActive] = useState(1)
    return (
        <div>
            <div className="bg-purple-500 text-white text-center p-5">
                <h2 className="mb-3 text-3xl font-bold">Dashboard</h2>
                <p className="mb-3 w-[65%] mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="flex justify-center items-center gap-3 font-medium">
                    <button
                        onClick={() => setActive(1)}
                        className={`w-40 py-2 border-white border rounded-full ${active === 1 ? 'bg-white text-purple-600' : ''}`}>
                        Cart</button>
                    <button
                        onClick={() => setActive(2)}
                        className={`w-40 py-2 border-white border rounded-full ${active === 2 ? 'bg-white text-purple-600' : ''}`}>
                        Wishlist</button>
                </div>
            </div>     
            {
                active === 1 ? <Cart></Cart>: <WishList></WishList>
            }
        </div>
    );
};
export default Dashboard;