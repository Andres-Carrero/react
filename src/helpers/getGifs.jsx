export const getGifs = async (categories) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categories)}&limit=10&api_key=JwceWwDWh7JK1oxxTkze18qhQyDNx0QN`;
    const res = await fetch(url);
    const {data} = await res.json(); 

    const gifs = data.map( arrayRes => {
        return {
            id: arrayRes.id,
            title: arrayRes.title,
            url: arrayRes.images.downsized_medium.url
        }
    })
    return gifs;
};