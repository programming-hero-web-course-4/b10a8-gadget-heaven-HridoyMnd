import { useEffect, useState } from "react";
import Cart from "./Cart/Cart";
import WishList from "./WishList/WishList";

const Dashboard = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    const [activeTab, setActiveTab] = useState(1);

    return (
        <div>
            {/* Header Section */}
            <div className="bg-purple-500 text-white text-center p-5">
                <h2 className="text-3xl font-bold mb-3">Dashboard</h2>
                <p className="w-[65%] mx-auto mb-3">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <div className="flex justify-center gap-3">
                    {["Cart", "Wishlist"].map((label, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index + 1)}
                            className={`w-40 py-2 border border-white rounded-full ${
                                activeTab === index + 1 ? "bg-white text-purple-600" : ""
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Render Selected Tab Content */}
            {activeTab === 1 ? <Cart /> : <WishList />}
        </div>
    );
};

export default Dashboard;
