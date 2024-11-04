import GadgetCard from "../GadgetCard/GadgetCard";
import Sidebar from "../Sidebar/Sidebar";

const GadgetCards = ({ Gadgets }) => {

    return (
        <div className="grid grid-cols-5 container mx-auto gap-6">
            <Sidebar></Sidebar>
            <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3 col-span-4 gap-6">
                {
                    Gadgets.map((Gadget, idx) => <GadgetCard key={idx} Gadget={Gadget}></GadgetCard>)
                }
            </div>
        </div>
    );
};

export default GadgetCards;