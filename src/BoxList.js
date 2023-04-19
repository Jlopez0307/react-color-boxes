import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box.js'

const BoxList = () => {
    const INITIAL_STATE = [
        {color: 'red', width: '100', height: '100'}
    ];
    const [box, setBox] = useState(INITIAL_STATE);

    const addBox = (newBox) => {
        setBox(boxes => [...boxes, {...newBox}])
    };

    const removeBox = () => {

    };



    return (
        <>
            <h1>Color Boxes!</h1>
            <NewBoxForm addBox={addBox}/>

            <div className="BoxList">
                {box.map(({ color, width, height }) => <Box color={color} width={width} height={height}/>)}
            </div>
        </>
    );
};

export default BoxList;