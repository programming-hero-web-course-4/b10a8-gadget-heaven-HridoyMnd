import { useContext, useEffect, useState } from "react";
import Banner from "../../Banner/Banner";
import { useLoaderData } from "react-router-dom";
import GadgetCards from "./GadgetCards/GadgetCards";
import Details from "./Details/Details";
import { myContext } from "../../../../App";
const Home = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title])
    const Gadgets = useLoaderData();
    //receive display 
    const { display } = useContext(myContext)

    // const {handeDetails} = useContext(myContext)/

    return (
        <>
            {
                display === true ?
                    <Details></Details> :
                    <div>
                        <Banner></Banner>
                        <GadgetCards Gadgets={Gadgets}></GadgetCards>
                    </div>

                // <Details></Details>
            }
        </>
    );
};

export default Home;