import { useContext } from "react";
import { myContext } from "../../../../../App";
import { RiDeleteBin6Line } from "react-icons/ri";
import modalImg from '../../../../Images/Group.png';

const Cart = () => {
    const { 
        isModalOpen, closeModal, cart, totalPrice, 
        handleGoToHome, handleSort, handleRemove 
    } = useContext(myContext);

    return (
        <div className="container mx-auto p-5">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold max-md:text-2xl">Cart</h2>
                <div>
                    <h3 className="inline-block text-xl font-bold max-md:text-lg">Total Cost: $ {totalPrice}</h3>
                    <button onClick={handleSort} className="ml-3 border border-purple-700 px-8 py-2 rounded-full text-xl font-semibold max-md:text-lg max-md:px-3">
                        Sort By Price
                    </button>
                    <button onClick={handleGoToHome} className="ml-3 border border-purple-700 px-8 py-2 rounded-full text-xl font-semibold bg-purple-600 text-white max-md:text-lg max-md:px-3">
                        Purchase
                    </button>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-5 rounded shadow-lg w-1/3 text-center">
                        <img src={modalImg} alt="Modal" className="mx-auto" />
                        <h2 className="text-xl font-bold mb-4">Congratulations!</h2>
                        <p>You have purchased: {cart.length} product(s)</p>
                        <h3>Total Cost: $ {totalPrice}</h3>
                        <button onClick={closeModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                            Close Modal
                        </button>
                    </div>
                </div>
            )}

            {/* Cart Items */}
            <div className="flex flex-col gap-4 mt-6 pb-8">
                {cart.map((item, idx) => (
                    <div key={idx} className="bg-gray-100 flex p-3 rounded-lg justify-between items-center max-sm:flex-col">
                        <div className="flex gap-6 max-sm:flex-col max-sm:text-center">
                            <img src={item.img} alt={item.name} className="w-32 rounded-lg max-sm:w-full" />
                            <div>
                                <h2 className="text-2xl font-semibold">{item.name}</h2>
                                <p className="text-gray-600 my-3">{item.description}</p>
                                <h3 className="font-semibold text-xl">Price: ${item.price}</h3>
                            </div>
                        </div>
                        <button onClick={() => handleRemove(item)} className="flex items-center gap-2 w-32 border border-purple-600 py-2 rounded-lg text-lg font-bold justify-center">
                            <span>Remove</span>
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
