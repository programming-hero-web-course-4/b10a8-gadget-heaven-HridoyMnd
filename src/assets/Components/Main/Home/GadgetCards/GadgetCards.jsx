import GadgetCard from "../GadgetCard/GadgetCard";
import Sidebar from "../Sidebar/Sidebar";
// import Sidebar from "../Sidebar/Sidebar";

const GadgetCards = ({ Gadgets }) => {

    return (

        <div className="grid grid-cols-12 container mx-auto gap-5">
            <Sidebar></Sidebar>
            <div className="col-span-10 grid-cols-3 grid max-lg:grid-cols-2 max-lg:col-span-9 max-md:col-span-8 max-sm:col-span-7 max-sm:grid-cols-1 max-xl:col-span-9 gap-5">
                {
                    Gadgets.map((Gadget, idx) => <GadgetCard key={idx} Gadget={Gadget}></GadgetCard>)
                }
            </div>
        </div>
    );
};

export default GadgetCards;