import { useEffect } from "react";
const Home = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title])
    return (
        <div>
            <h2>This is the Home Component</h2>
        </div>
    );
};

export default Home;