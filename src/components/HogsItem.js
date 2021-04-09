import React, {useState} from "react";

function HogsItem({name, image, specialty, weight, greased, medal}) {
    const [click, setClick] = useState(false)
    
    function clickHandler () {
        setClick(!click)
    }
    let greasedHog = (greased ? "Not Greased" : "Greased" )
    console.log(greasedHog)
 
    function renderDisplay() {
        // console.log({greased})
        return (
        <div>
          <p>{specialty}</p>
          <p>{weight}</p>
          <p>{greasedHog}</p>
          {/* <p>{greased}</p> */}
          <p>{medal}</p>
        </div>

        )
      }

    return (
        <div onClick={clickHandler} className="pigTile">
            <img src={image} />
            <p>{name}</p>
            {click ? null : renderDisplay()}
        </div>
    )
}

export default HogsItem;