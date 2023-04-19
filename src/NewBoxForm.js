import React, { useState } from "react";
import Box from "./Box";

//Uses addBox function from BoxList as prop
const NewBoxForm = ({ addBox }) => {
    //State for when the form/inputs need to be empty
    const INITIAL_STATE = {
        color: '#ff0000',
        width: '100',
        height: '100'
    };

    //State for all form data
    const [formData, setFormData] = useState(INITIAL_STATE);

    //Handles changes in the inputs, and puts them in state based on their names and values
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(() => ({
            ...formData,
            [name]: value
        }));
    };

    //Handles form submit, pushes data up to BoxList to create a new Box Component
    const handleSubmit = e => {
        e.preventDefault();
        addBox({...formData});
        setFormData(INITIAL_STATE);
    };

    return (
        <>  
            <h2>Create a Box!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Box Color: {formData.color}</label>
                <input 
                    type="color"
                    id="color"
                    name="color"
                    placeholder="Color"
                    value={formData.color}
                    onChange={handleChange}
                />
                <label htmlFor="width">Box Width: {formData.width}</label>
                <input 
                    type="range"
                    id="width"
                    name="width"
                    min="100"
                    max="1000"
                    placeholder="Width"
                    value={formData.width}
                    onChange={handleChange}
                />
                <label htmlFor="color">Box Height: {formData.height}</label>
                <input 
                    type="range"
                    id="height"
                    name="height"
                    min="100"
                    max="1000"
                    placeholder="Height"
                    value={formData.height}
                    onChange={handleChange}
                />
                <button>Create Box!</button>
            </form>
        </>
    );
};

export default NewBoxForm;