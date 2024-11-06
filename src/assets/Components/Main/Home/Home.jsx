import { useEffect } from "react";
import Banner from "../../Banner/Banner";
import GadgetCards from "./GadgetCards/GadgetCards";

const Home = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <>
            <Banner />
            <GadgetCards />
        </>
    );
};

export default Home;
