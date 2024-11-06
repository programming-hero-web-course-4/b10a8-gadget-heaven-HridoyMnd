import { useContext } from "react";
import { myContext } from "../../../../../App";
import { RiDeleteBin6Line } from "react-icons/ri";

const WishList = () => {

    //receive wishList
    const { wishList } = useContext(myContext)
    const {handleRemoveWish} = useContext(myContext)
    return (
        <div className="container mx-auto p-5">
            <h2 className="text-3xl font-bold mb-2">Wishlist</h2>
            <div className=" pb-8">
                <div className="flex flex-col gap-6">
                    {
                        wishList.map((item, idx) =>
                            <div key={idx} className="bg-gray-100 flex p-3 rounded-lg justify-between items-center max-sm:flex-col">
                                <div className="flex gap-6 max-sm:flex-col max-sm:text-center ">
                                    <div><img src={item.img} alt="" className=" max-sm:w-full w-32 rounded-lg" /> </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold">{item.name}</h2>
                                        <h3 className="text-gray-600 my-3">{item.description}</h3>
                                        <h3 className="font-semibold text-xl">Price: ${item.price}</h3>
                                    </div>
                                </div>
                                <button onClick={() => handleRemoveWish(item)} className="font-bold text-lg items-center justify-center flex gap-2 w-32 border border-purple-600 py-2 rounded-lg"><span>Remove</span><RiDeleteBin6Line /></button>

                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default WishList;