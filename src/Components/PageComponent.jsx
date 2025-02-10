import Object from "./Object/Object.jsx";
import Styles from "./PageComponent.module.css"
import {useState} from "react";


function PageComponent() {
    // const [rotation, setRotation] = useState(30);
    const [rotation, setRotation] = useState({triangle: 30, square: 1});
    console.log(rotation);
    const square = {
        width: '100px',
        height: '100px',
        backgroundColor: 'black',
        cursor: 'grab',
        position: 'absolute',
        top: '200px',
        rotate: rotation.square + 'deg',
        left: '0'
    }


    const triangle = {
        borderLeft: '50px solid transparent',
        borderRight: '48px solid transparent',
        borderBottom: '85px solid white',
        cursor: 'grab',
        position: 'absolute',
        rotate: rotation.triangle + 'deg'
    }

    return (
        <>
            <div className={Styles.myContainer}>
                <h1 className={Styles.header}>Tangaram</h1>
                <h2>Double click to rotate object</h2>
                <h2>Drag Click to move object</h2>
            </div>


            <Object id='square' style={square} setRotation={setRotation}/>
            <Object id='triangle' style={triangle} setRotation={setRotation}/>
            <Object id='otherTriangle' style={triangle} setRotation={setRotation}/>

        </>
    );
}

export default PageComponent;