import { useSelector } from "react-redux";
import { useState } from "react";

function AirlineList() {
    const airlineList = useSelector(store => store.airlineList);
    
    return (
        <ul>
            {airlineList.map((airline, i) => (
                <li key={i}>{airline}</li>

            ))}


        </ul>

    )
}


export default AirlineList;