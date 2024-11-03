import { useEffect } from "react";
const Statistics = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title])
    return (
        <div>
            <h2>This is the Statistics Component</h2>
        </div>
    );
};

export default Statistics;