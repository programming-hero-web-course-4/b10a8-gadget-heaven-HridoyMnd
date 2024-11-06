import { useContext } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../../../../../App";
const GadgetCard = ({ Gadget }) => {


    const {handleDetails} = useContext(myContext)
    const handleClick = (data) => {
        handleDetails(data);
      };
    
    return (
        <div className="">
            <div className=" border bg-slate-100 p-3 rounded-xl text-center">
                <img src={Gadget.img} alt="" className=" aspect-[6/4] rounded-xl" />
                <h3 className="font-semibold sm:text-xl text-2xl mt-3">{Gadget.name}</h3>
                <h4 className="font-medium text-xl mt-2"> ${Gadget.price}</h4>
                <Link to="details">
                <button
                    onClick={()=>handleClick(Gadget)}
                    className="font-medium mt-4 text-purple-500 px-8 py-2 rounded-full border border-purple-500">
                    View Details
                </button>
                </Link>
            </div>
        </div>
    );
};

export default GadgetCard;