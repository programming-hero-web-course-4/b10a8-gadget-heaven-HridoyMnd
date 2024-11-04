import { useEffect } from "react";
import { useState } from "react";

const Sidebar = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('categorys.json')
            .then((res) => res.json())
            .then((data) => setCategory(data))
    }, [])

    return (
        <div className="border rounded-xl flex items-center p-5 text-center gap-6 col-span-2 flex-col h-[430px] max-lg:col-span-3 max-md:col-span-4 max-sm:col-span-5 max-xl:col-span-3">
            <button className="w-40 py-2 bg-slate-200 rounded-lg text-lg font-medium">All</button>
            {
                category.map((item, id)=> <button key={id} className="p-2 w-40 rounded-lg text-lg font-medium bg-slate-200">{item.category}</button>)
            }
        </div>
    );
};

export default Sidebar;