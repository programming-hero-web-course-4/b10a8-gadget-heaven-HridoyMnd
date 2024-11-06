import { useContext } from "react";
import { myContext } from "../../../../../App";
import { RiDeleteBin6Line } from "react-icons/ri";

const WishList = () => {
    const { wishList, handleRemoveWish } = useContext(myContext);

    return (
        <div id="wish" className="container mx-auto p-5">
            <h2 className="text-3xl font-bold mb-2">Wishlist</h2>
            <div className="flex flex-col gap-6 pb-8">
                {wishList.map((item, idx) => (
                    <div key={idx} className="bg-gray-100 flex p-3 rounded-lg justify-between items-center max-sm:flex-col">
                        <div className="flex gap-6 max-sm:flex-col max-sm:text-center">
                            <img src={item.img} alt={item.name} className="w-32 rounded-lg max-sm:w-full" />
                            <div>
                                <h2 className="text-2xl font-semibold">{item.name}</h2>
                                <h3 className="text-gray-600 my-3">{item.description}</h3>
                                <h3 className="font-semibold text-xl">Price: ${item.price}</h3>
                            </div>
                        </div>
                        <button onClick={() => handleRemoveWish(item)} className="flex justify-center items-center gap-2 w-32 border border-purple-600 py-2 rounded-lg font-bold text-lg">
                            <span>Remove</span>
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WishList;
