import { useEffect, useState } from "react";

const Sidebar = ({ onCategorySelect }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categorys.json')
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    return (
        <div className="flex items-center rounded-xlv text-center gap-6 col-span-2 flex-col border h-[430px] max-sm:col-span-5 max-lg:col-span-3 p-5">
            <button 
                className="w-40 max-md:w-32 py-2 bg-slate-100 rounded-lg text-lg font-medium"
                onClick={() => onCategorySelect(null)}>
                All
            </button>
            {categories.map((item, id) => (
                <button 
                    key={id} // using category key for uniqueness
                    className="p-2 w-40 max-md:w-32 rounded-lg text-lg font-medium bg-slate-100"
                    onClick={() => onCategorySelect(item.category)}>
                    {item.category}
                </button>
            ))}
        </div>
    );
};

export default Sidebar;
