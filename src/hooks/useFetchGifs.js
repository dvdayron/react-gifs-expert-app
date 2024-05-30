import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
  
    const processGifs = async() => {
        const newGifs = await getGifs(category)
        setGifs(newGifs)
        setIsLoading(false)
    }

    useEffect(() => {
        processGifs()
    }, [])

    return {
        gifs,
        isLoading,
    }
}

export default useFetchGifs
