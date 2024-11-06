
import React, { useContext, useState } from 'react';
import GadgetCard from "../GadgetCard/GadgetCard";
import Sidebar from "../Sidebar/Sidebar";
import { myContext } from '../../../../../App';

const GadgetCards = () => {
    const {Gadgets} = useContext(myContext)

    const [selectedCategory, setSelectedCategory] = useState(null);
    // Filtered gadgets based on selected category
    const filteredGadgets = selectedCategory 
        ? Gadgets.filter(gadget => gadget.category === selectedCategory)
        : Gadgets.slice(0, 8);;
    return (
        <div id='cardContainer' className="container mx-auto gap-4 grid grid-cols-12">
            <Sidebar onCategorySelect={setSelectedCategory} />
            <div className=" col-span-10 grid grid-cols-3 max-sm:grid-cols-1 max-sm:col-span-7 max-lg:grid-cols-2 max-lg:col-span-9 gap-5">
                {filteredGadgets.map((Gadget, idx) => (
                    <GadgetCard key={idx} Gadget={Gadget} />
                ))}
            </div>
        </div>
    );
};

export default GadgetCards;
//  grid grid-cols-3 max-lg:grid-cols-3 max-sm:grid-cols-1 gap-5 max-lg:col-span-9 max-md:col-span-8 max-sm:col-span-7