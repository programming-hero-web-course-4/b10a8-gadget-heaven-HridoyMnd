
import React, { useState } from 'react';
import GadgetCard from "../GadgetCard/GadgetCard";
import Sidebar from "../Sidebar/Sidebar";

const GadgetCards = ({ Gadgets, handleDetails }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    // Filtered gadgets based on selected category
    const filteredGadgets = selectedCategory 
        ? Gadgets.filter(gadget => gadget.category === selectedCategory)
        : Gadgets;
    return (
        <div className="grid grid-cols-12 container mx-auto gap-5">
            <Sidebar onCategorySelect={setSelectedCategory} />
            <div className="col-span-10 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
                {filteredGadgets.map((Gadget, idx) => (
                    <GadgetCard key={idx} Gadget={Gadget} handleDetails={handleDetails} />
                ))}
            </div>
        </div>
    );
};

export default GadgetCards;
