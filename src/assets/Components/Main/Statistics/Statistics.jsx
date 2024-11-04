import { useEffect } from "react";
const Statistics = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title])

    return (
        <div className="container mx-auto">
            <h2>This is the Statistics Component</h2>
        </div>
    );
};

export default Statistics;