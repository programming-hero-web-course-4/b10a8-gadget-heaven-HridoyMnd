import { useContext, useEffect } from "react";
import { BsHandbagFill } from "react-icons/bs";
import { myContext } from "../../../../App";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const Purchased = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    const navigate = useNavigate();
    const gotoShop = () => {
        navigate('/#cardContainer');
    };

    const { purchased, handleRemovePurchased } = useContext(myContext);

    return (
        <div className="container mx-auto">
            <div className="text-center bg-purple-500 text-white p-3 rounded-lg">
                <h1 className="text-3xl font-bold">Purchased Product</h1>
                <p className="mt-3 text-slate-100 w-[60%] mx-auto">
                    A smart gadget purchase involves buying advanced electronic devices designed to simplify and enhance daily tasks through automation, connectivity, and intelligent features.
                </p>
                <button 
                    onClick={gotoShop} 
                    className="text-xl font-bold bg-slate-100 text-purple-600 mt-5 mb-2 px-8 py-2 border border-white rounded-lg">
                    Buy More
                </button>
            </div>
            <div className="pb-32 my-10">
                <div className="flex items-center justify-between px-5">
                    <h2 className="text-2xl font-bold">Purchased Item: {purchased.length}</h2>
                    <div className="relative">
                        <BsHandbagFill className="text-2xl relative" />
                        <span className="absolute bg-purple-400 h-5 w-5 flex items-center justify-center rounded-full -right-4 -top-2 text-white">
                            {purchased.length}
                        </span>
                    </div>
                </div>
                <div className="w-[70%] mx-auto p-3 rounded-xl flex flex-col gap-4 mt-10">
                    {purchased.map((item, idx) => (
                        <div key={item.id || idx} className="bg-gray-100 flex p-3 rounded-lg justify-between items-center max-sm:flex-col">
                            <div className="flex gap-6 max-sm:flex-col max-sm:text-center ">
                                <div><img src={item.img} alt={item.name} className="max-sm:w-full w-32 rounded-lg" /></div>
                                <div>
                                    <h2 className="text-2xl font-semibold">{item.name}</h2>
                                    <h3 className="text-gray-600 my-3">{item.description}</h3>
                                    <h3 className="font-semibold text-xl">Price: ${item.price}</h3>
                                </div>
                            </div>
                            <button 
                                onClick={() => handleRemovePurchased(item)} 
                                className="font-bold text-lg items-center justify-center flex gap-2 w-32 border border-purple-600 py-2 rounded-lg">
                                <span>Remove</span><RiDeleteBin6Line />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Purchased;
