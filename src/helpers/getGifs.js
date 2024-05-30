export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=JySA48E5TbPBYhDGX8y1fSnQXp91P1LX&q=${category}&limit=12`
    const response = await fetch(url)
    const { data = [] } = await response.json()
    const gifs = data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url,
    }))
    
    return gifs
}