import './App.css'
import Object from "./Components/Object/Object.jsx";

import {useState} from "react";


function App() {
    const [rotation, setRotation] = useState(30);

    const square = {
        width: '100px',
        height: '100px',
        backgroundColor: 'black',
        cursor: 'grab',
        position: 'absolute',
        top: '200px',
        left: '0'
    }

    const triangle = {
        borderLeft: '50px solid transparent',
        borderRight: '48px solid transparent',
        borderBottom: '85px solid white',
        cursor: 'grab',
        position: 'absolute',
        rotate: rotation + 'deg'
    }

  return (
    <>
        <Object style={square} setRotation={setRotation}/>
        <Object style={triangle} setRotation={setRotation}/>

    </>
  )
}

export default App
