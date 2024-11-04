import { useEffect } from "react";

const Dashboard = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title])

    return (
        <div className="container mx-auto">
            <h2>This is the Dashboard Component</h2>
        </div>
    );
};

export default Dashboard;