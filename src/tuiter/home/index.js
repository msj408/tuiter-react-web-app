import React from "react";
import TuitsList from "../tuits/tuitList";
import WhatsHappening from "./what-happening";

const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};
export default HomeComponent;