import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFechGifs = (categories) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(categories).then(imgs => {
            //setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                });
            //}, 5000);
        });
    }, [categories])
    

    return state;
}