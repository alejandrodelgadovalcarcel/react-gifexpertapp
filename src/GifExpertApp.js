
import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
     
    // const [categories, setCategories] = useState(['One Puch','Samurai X','Dragon Ball']);
    const [categories, setCategories] = useState(['Real Madrid']);


    // const handleAdd =() =>{
    //     //setCategories([...categories, 'Ale']);
    //     setCategories( cats => [...cats, 'Ale']);
    // }

    return (
    <>
   
    <h2>GifExpertApp</h2>
    <AddCategory setCategories={ setCategories }/>
    <hr />

    {/* <button onClick={ handleAdd }>Agregar</button> */}
   
    <ol>
        {
            categories.map ( category=>(
               // return <li key={category}> {category} </li>
                <GifGrid 
                key={category}
                category={category} />

                ))


        }




    </ol>




    </>
  );
}

