
import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {
    
    //const [images, setImages] = useState([]);
   
    const {data:images, loading} = useFetchGifs( category );
    
    // useEffect( () => {
    //     getGifs( category )
    //     .then(setImages);



    // }, [ category] )


  
    return (
<>
    <h3 className="animate__animated animate__flash"> { category  } </h3>

        { loading && <p className='animate__animated animate__flash'> Cargando...</p>}

    {/* {loading? 'Cargando': 'Data cargada'} */}
    <div className='card-grid'>

        {
        images.map( img => (
            <GifGridItem 
            key={img.id}
            {...img}
            />


        ))
        
        }

    
  
    </div>

    </>
  )
}

    // categories.map ( category=>(
    // return <li key={category}> {category} </li>
    //     <GifGrid 
    //     key={category}
    //     category={category} />

    //     ))


