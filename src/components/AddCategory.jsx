import React, { useState } from 'react'
import PropTypes from "prop-types";

function AddCategory({setCategories}) {
   
    const [dataInput, setDataInput] = useState('')

    const changeInput = (e) => {
        setDataInput(e.target.value);
    }

    const submitChange = (e) => {
        e.preventDefault();

        if(dataInput.length >= 2){
            setCategories(cats => [ dataInput, ...cats]);
            setDataInput('');
        }
        
    }

    return (
        <form onSubmit={submitChange}>
            <input type="text" value={dataInput} onChange={changeInput}/>
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory