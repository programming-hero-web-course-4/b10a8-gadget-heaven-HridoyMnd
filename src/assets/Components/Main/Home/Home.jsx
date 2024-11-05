import { useEffect } from "react";
import Banner from "../../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import GadgetCards from "./GadgetCards/GadgetCards";
import Details from "./Details/Details";
const Home = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title])
    const Gadgets = useLoaderData();
    return (
        <>
            <Banner></Banner>
            <GadgetCards Gadgets={Gadgets}></GadgetCards>
            <Details></Details>
        </>
    );
};

export default Home;