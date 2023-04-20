import React from "react";

const Box = ({ color, width, height, id, removeBox }) => {

    const handleClick = () => {
        removeBox(id)
    }


    return (
        <>  
            <div className="Box" style={{
            backgroundColor: color,
            width: `${width}px`, 
            height: `${height}px`
            }}>
            <button onClick={handleClick} className="Box-btn">X</button>
            </div>
        </>
    );
};

export default Box;