import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../../../../../App';
import StarRatings from "react-star-ratings";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";

const Details = () => {
    const { handleAddCart, handleWishList, isClicked, details } = useContext(myContext);
    const { name, price, description, availability, img, specification, rating } = details;
    
    const [star, setRating] = useState(rating || 0);
    const [specifications, setSpecifications] = useState(null);

    useEffect(() => {
        setSpecifications(specification);
    }, [specification]);

    return (
        <div className="bg-gray-100 pb-80">
            <div className="bg-purple-500 text-center pt-5 text-white pb-52 mb-10 relative">
                <h2 className="text-3xl font-bold">Product Details</h2>
                <p className="w-[65%] mx-auto">
                    Smart gadgets are advanced electronic devices designed to simplify daily tasks by connecting seamlessly and enhancing user experience.
                </p>
                <div className="w-[80%] bg-gray-100 mt-10 flex gap-4 mx-auto absolute translate-x-32 p-4 rounded-xl">
                    <img src={img} alt={name} className="w-[38%] rounded-xl" />
                    <div className="text-black text-left ml-5">
                        <h2 className="mt-2 text-2xl font-semibold">{name}</h2>
                        <p className="mt-2 text-lg font-semibold">Price: ${price}</p>
                        <button className="mt-2 text-green-600 bg-green-50 border border-green-400 px-3 py-1 rounded-full">
                            {availability}
                        </button>
                        <p className="mt-2 text-gray-800">{description}</p>
                        
                        {/* Specification list */}
                        <h4 className="mt-2 font-bold">Specification</h4>
                        <ul className="list-disc ml-6 text-gray-800">
                            {specifications 
                                ? Object.values(specifications).map((value, index) => <li key={index}>{value}</li>) 
                                : <p>Loading...</p>}
                        </ul>

                        {/* Star Rating Component */}
                        <div>
                            <p className="font-bold">Rating: {star}</p>
                            <StarRatings
                                rating={star}
                                starRatedColor="orange"
                                starDimension="30px"
                                starSpacing="5px"
                                changeRating={setRating}
                                numberOfStars={5}
                                name="rating"
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-2 flex gap-3">
                            <button onClick={() => handleAddCart(details)} className="flex items-center gap-2 px-8 py-2 bg-purple-400 rounded-full text-white font-bold">
                                <span>Add to Cart</span>
                                <LuShoppingCart />
                            </button>
                            <button onClick={() => handleWishList(details)} className={`flex items-center justify-center h-10 w-10 rounded-full ${isClicked ? 'text-white border-white bg-gray-400' : 'border-purple-600 bg-slate-100'}`}>
                                <FaRegHeart />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
