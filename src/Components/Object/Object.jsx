import {useState} from "react";

function Object (props) {
    var theElement;
    const [diffX, setDiffX] = useState(0);
    const [diffY, setDiffY] = useState(0);

    const {id} = props;
    const {style} = props;
    const {setRotation} = props;

    const doRotation = (event) => {
        console.log("in doRotation")
        //could do cook something with this
        event.target.style.transform = "rotate(45deg)";
        // setRotation(prevRotation => prevRotation + 45)
        // if(id === 'triangle') {
        //
        //
        //     setRotation(r => ({...r, triangle: r.triangle + 45}))
        //
        // }
        // else if (id === 'square'){
        //     setRotation(r => ({...r, square: r.square + 45}));
        // }
    }


    function grabber(event) {

        // Set the global variable for the element to be moved
        theElement = event.currentTarget;
        // Determine the position of the word to be grabbed,
        // first removing the units from left and top

         let posX = parseInt(theElement.style.left);
         let posY = parseInt(theElement.style.top);

        //Compute the difference between where it is and
        // Where the mouse click occurred
        setDiffX(event.clientX - posX);
        setDiffY(event.clientY - posY);

        // Now register the event handlers for moving and dropping the word
        document.addEventListener("mousemove", mover, true);
        document.addEventListener("mouseup", dropper, true);
        console.log("Event listener's added");
    }

    const mover = (event) => {

        // Compute the new position, add the units, and move the word
        theElement.style.cursor = "grabbing";
        theElement.style.left = (event.clientX - diffX) + "px";
        theElement.style.top = (event.clientY - diffY) + "px";


    }

    const dropper = (event) => {
        // Unregister the event handlers for mouseup and mousemove
        document.removeEventListener("mouseup", dropper, true);
        document.removeEventListener("mousemove", mover, true);
        console.log("Removed Event Listeners");
        theElement.style.cursor = "grab";
    }

    return <div onMouseDown={grabber} style={style} onDoubleClick={doRotation}></div>
}

export default Object;