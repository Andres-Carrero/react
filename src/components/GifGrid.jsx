/*import React, {useEffect, useState} from 'react'
import { getGifs } from '../helpers/getGifs';*/

import React from 'react'
import { useFechGifs } from '../hooks/useFechGifs';
import GifGridItem from './GifGridItem';

function GifGrid({categories}) {
    /*const [images, setImages] = useState([]);

    useEffect(()=>{
        getGifs(categories).then( setImages );
    }, [categories]);*/

    const {data, loading} = useFechGifs(categories);
    console.log(data);

    return (
        <>
         
        <h1>{categories}</h1>
        {loading && <p>Cargando...</p>}

        <div className='cardGrid'>
            
            {
                data.map( datas => {
                    return <GifGridItem key={datas.id} {...datas} />;
                })
            }
    
        </div >
        </>
          
    )
}

export default GifGrid