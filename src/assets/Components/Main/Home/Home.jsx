import { useContext, useEffect, useState } from "react";
import Banner from "../../Banner/Banner";

import GadgetCards from "./GadgetCards/GadgetCards";
import Details from "./Details/Details";
import { myContext } from "../../../../App";
const Home = ({ title }) => {
    useEffect(() => {
        document.title = title;
    }, [title])
    
    //receive display 
    // const { display } = useContext(myContext)
    return (
        <>

                    {/* <Details></Details>  */}
 
                        <Banner></Banner>
                        <GadgetCards></GadgetCards>

        </>
    );
};

export default Home;