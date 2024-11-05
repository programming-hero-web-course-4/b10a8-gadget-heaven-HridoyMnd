import { useEffect } from "react";
import Banner from "../../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import GadgetCards from "./GadgetCards/GadgetCards";
const Home = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title])
    const Gadgets = useLoaderData();
    const handleDetails = (data) => {
            console.log(data);
    }
    return (
        <>
            <Banner></Banner>
            <GadgetCards Gadgets={Gadgets} handleDetails={handleDetails}></GadgetCards>
        </>
    );
};

export default Home;