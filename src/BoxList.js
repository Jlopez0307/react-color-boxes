import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box.js'
import './styles/Box.css'
import { v4 as uuid } from 'uuid'

const BoxList = () => {
    const INITIAL_STATE = [
        {id: uuid(), color: 'red', width: '100', height: '100'}
    ];
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    console.log(boxes)

    //Adds a new box to state from form data
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuid()}])
    };

    //Removes box
    const removeBox = (boxId) => {
        setBoxes(boxes.filter(box => box.id !== boxId))
    };



    return (
        <>
            <h1>Color Boxes!</h1>
            <NewBoxForm addBox={addBox}/>

            <div className="BoxList">
                {boxes.map(({ color, width, height, id }) => <Box color={color} width={width} height={height} key={id} id={id} removeBox={removeBox}/>)}
            </div>
        </>
    );
};

export default BoxList;