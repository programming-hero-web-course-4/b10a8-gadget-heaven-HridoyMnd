import { useContext } from "react";
import { myContext } from "../../../../../App";
import { RiDeleteBin6Line } from "react-icons/ri";

const WishList = () => {

    //receive wishList
    const {wishList} = useContext(myContext)
    return (
        <div className="container mx-auto p-5">
            <h2 className="text-3xl font-bold mb-2">Wishlist</h2>
            <div className=" pb-8">
                {
                    wishList.map((item, idx) =>
                        <div key={idx} className="bg-gray-100 flex p-3 rounded-lg my-6 justify-between items-center">
                            <div className="flex gap-6">
                                <div><img src={item.img} alt="" className="w-32 rounded-lg" /> </div>
                                <div>
                                    <h2 className="text-2xl font-semibold">{item.name}</h2>
                                    <h3 className="text-gray-600 my-3">{item.description}</h3>
                                    <h3 className="font-semibold text-xl">Price: ${item.price}</h3>
                                </div>
                            </div>
                            <button className="font-bold text-xl items-center justify-center flex gap-2 w-32 border border-purple-600 py-2 rounded-lg"><span>Remove</span><RiDeleteBin6Line /></button>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default WishList;