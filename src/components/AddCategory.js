
import React, { useState } from 'react';
import {setCategories} from '../GifExpertApp';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
  
    


  const [inputValue, setInpuntValue] = useState('');

  const handleInputChange = (e) => {
    setInpuntValue(e.target.value);
    
  }

 const handleSubmit = (e)=>{
    e.preventDefault();

    if(inputValue.trim().length>2){
    // console.log('Exitoso');
    setCategories( cats => [ inputValue, ...cats ]);
    }


 }
  
    return (
    
    
    <form onSubmit={ handleSubmit}>
        <input 
        type="text"
        value={ inputValue }
        onChange={ handleInputChange }
    
            />
    
    </form>
  )

  
}

AddCategory.prototype={
    setCategories: PropTypes.func.isRequired
}
