import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../../../../../App';
import StarRatings from "react-star-ratings";

const Details = () => {
    // Rating state
    const [rating, setRating] = useState(0);
    
    // Getting product details from context
    const { details } = useContext(myContext);
    const { name, price, description, availability, img, specification } = details;

    // State for specifications
    const [myObject, setMyObject] = useState(null);

    // Effect to set the specifications
    useEffect(() => {
        setMyObject(specification);
    }, [specification]);

    // Function to change rating
    const changeRating = (newRating) => {
        setRating(newRating);
    };

    return (
        <div className='border border-red-400 p-10 m bg-gray-200 pb-52'>
            <div className='bg bg-purple-500 text-center text-white pb-14 mb-10'>
                <h2 className='text-3xl font-bold'>Product Details</h2>
                <p className='w-[65%] mx-auto'>
                    Smart gadgets are advanced electronic devices designed to make daily tasks easier. They connect seamlessly to each other and to the internet, enhancing user experience by providing personalized.
                </p>
                <div className='w-[70%] bg-red-300 mt-10 flex'>
                    <img src={img} alt="" className='w-[50%]' />
                    <div className='text-black text-left'>
                        <h2 className='text-2xl font-semibold'>{name}</h2>
                        <p className='text-lg font-semibold'>{price} </p>
                        <button className='bg-green-100 border border-green-400 px-3 py-1 rounded-full'>{availability} </button>
                        <p>{description}</p>
                        <ul className='list-disc'>
                            {myObject ? (
                                Object.values(myObject).map((value, index) => (
                                    <li key={index}>{value}</li>
                                ))
                            ) : (
                                <p>Loading...</p>
                            )}
                        </ul>
                        {/* Star Rating Component */}
                        <div>
                            <StarRatings
                                rating={rating}
                                starRatedColor="gold"
                                starDimension="30px"
                                starSpacing="5px"
                                changeRating={changeRating}
                                numberOfStars={5}
                                name='rating'
                            />
                            <p>Your rating: {rating}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
