

const GadgetCard = ({ Gadget }) => {
    return (
        <div className="">
            <div className=" border bg-slate-200 p-3 rounded-xl text-center">
                <img src={Gadget.img} alt="" className=" aspect-[6/4] rounded-xl" />
                <h3 className="font-semibold text-2xl mt-3">{Gadget.name}</h3>
                <h4 className="font-medium text-xl mt-2"> ${Gadget.price}</h4>
                <button className="font-medium mt-4 text-purple-500 px-8 py-2 rounded-full border border-purple-500">Viwe Details</button>
            </div>
        </div>
    );
};

export default GadgetCard;