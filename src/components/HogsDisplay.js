import React, {useState} from "react";
import hogs from "../porkers_data.js";
import HogsItem from "./HogsItem.js"


function HogsDisplay({hogs}) {
    const hogsElements = hogs.map((hog) => {
        return (
        <HogsItem 
        key={hog.name} 
        name={hog.name} 
        image={hog.image}
        specialty = {hog.specialty}
        weight = {hog.weight}
        greased = {hog.greased}
        medal = {hog["highest medal achieved"]}
        />
        )
    })
    return (
    <div>
        {hogsElements}
    </div>
    )
}

export default HogsDisplay;

// {hogs.filter(hog=> hog.greased )}
// return !isFiltered || hog.greased