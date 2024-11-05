import { useContext } from "react";
import { myContext } from "../../../../../App";
import { RiDeleteBin6Line } from "react-icons/ri";


const Cart = () => {
    //modal part
    const {isModalOpen} = useContext(myContext);
    const {closeModal}  = useContext(myContext)
    const { cart } = useContext(myContext)
    const {totalPrice} = useContext(myContext)
    const {handleGoToHome} = useContext(myContext)
    //handle sort
    const { handleSort } = useContext(myContext)
    return (
        <div className="container mx-auto p-5">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">Cart</h2>
                <div>
                    <h3 className="text-xl font-bold inline-block">Total Cost: $  {totalPrice}</h3>
                    <button onClick={() => handleSort()} className="border border-purple-700 px-8 py-2 rounded-full text-xl font-semibold ml-3">Sort By Price</button>
                    <button onClick={() => handleGoToHome()} className="border border-purple-700 px-8 py-2 rounded-full text-xl font-semibold ml-3 bg-purple-600 text-white">Purchase</button>
                </div>
            </div>
            <div className=" pb-8">
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-5 rounded shadow-lg w-1/3">
                        <h2 className="text-xl font-bold mb-4">Modal Title</h2>
                        <p>This is the modal content.</p>
                        <button onClick={closeModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                            Close Modal
                        </button>
                    </div>
                </div>
            )}
                {
                    cart.map((item, idx) =>
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

export default Cart;