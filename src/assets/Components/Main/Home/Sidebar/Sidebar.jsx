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
        <div className="border border-blue-700 rounded-xl p-4 flex flex-col gap-5 h-[15%] items-center justify-center text-center">
            <button className="px-8 py-2 bg-slate-200 rounded-lg text-lg font-medium">All Category</button>
            {
                category.map((item, id)=> <button key={id} className="px-8 p-2 w-40 rounded-lg text-lg font-medium bg-slate-200">{item.category}</button>)
            }
        </div>
    );
};

export default Sidebar;