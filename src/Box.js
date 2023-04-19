import React from "react";

const Box = ({color, width, height}) => {
    return (
        <>  
            <button>Remove Box</button>
            <div style={{
            backgroundColor: color, 
            width: `${width}px`, 
            height: `${height}px`
            }}></div>
        </>
    );
};

export default Box;