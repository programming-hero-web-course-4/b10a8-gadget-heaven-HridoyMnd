import { useContext } from "react";
import { myContext } from "../../../../../App";
import { RiDeleteBin6Line } from "react-icons/ri";
import modalImg from '../../../../Images/Group.png'


const Cart = () => {
    //modal part
    const { isModalOpen } = useContext(myContext);
    const { closeModal } = useContext(myContext)
    const { cart } = useContext(myContext)
    const { totalPrice } = useContext(myContext)
    const { handleGoToHome } = useContext(myContext)
    //handle sort
    const { handleSort } = useContext(myContext)
    //handle Remove
    const { handleRemove } = useContext(myContext)
    return (
        <div className="container mx-auto p-5">
            <div className="flex justify-between items-center">
                <h2 className="max-md:text-2xl text-3xl font-bold">Cart</h2>
                <div>
                    <h3 className="text-xl max-md:text-lg font-bold inline-block">Total Cost: $  {totalPrice}</h3>
                    <button onClick={() => handleSort()} className="border border-purple-700 px-8 max-md:px-3 py-2 rounded-full max-md:text-lg text-xl font-semibold ml-3">Sort By Price</button>
                    <button onClick={() => handleGoToHome()} className="border border-purple-700 px-8 max-md:px-3 py-2 rounded-full max-md:text-lg text-xl font-semibold ml-3 bg-purple-600 text-white">Purchase</button>
                </div>
            </div>
            <div className=" pb-8">
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-5 rounded shadow-lg w-1/3 text-center">
                            <img src={modalImg} alt="" className="mx-auto" />
                            <h2 className="text-xl font-bold mb-4">Congratulation</h2>
                            <p>You have purchased: {cart.length} product</p>
                            <h3>Total Cost: $ {totalPrice}</h3>
                            <button onClick={closeModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                                Close Modal
                            </button>
                        </div>
                    </div>
                )}
                <div className="flex flex-col gap-4 mt-6">
                    {
                        cart.map((item, idx) =>
                            <div key={idx} className="bg-gray-100 flex p-3 rounded-lg justify-between items-center max-sm:flex-col">
                                <div className="flex gap-6 max-sm:flex-col max-sm:text-center ">
                                    <div><img src={item.img} alt="" className=" max-sm:w-full w-32 rounded-lg" /> </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold">{item.name}</h2>
                                        <h3 className="text-gray-600 my-3">{item.description}</h3>
                                        <h3 className="font-semibold text-xl">Price: ${item.price}</h3>
                                    </div>
                                </div>
                                <button onClick={() => handleRemove(item)} className="font-bold text-lg items-center justify-center flex gap-2 w-32 border border-purple-600 py-2 rounded-lg"><span>Remove</span><RiDeleteBin6Line /></button>

                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;