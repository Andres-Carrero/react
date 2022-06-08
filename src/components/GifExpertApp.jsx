import React, {useState} from 'react'
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

function GifExpertApp() {
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState([]);
   

    

    return (
        <>
            <h2>Git Expert APP</h2>
            <hr />
            <AddCategory setCategories={setCategories} />
            
            
            <ol>
                {
                    categories.map( (data, i) => {
                        return  <GifGrid key={i} categories={data} />
                        
                    })
                }
            </ol>
        </>
    )
}

export default GifExpertApp