// api_key=`https://api.themoviedb.org/3/movie/popular?api_key=0af9936fdd27cbb403e5cdddaba65172&language=en-US`
import React, {useEffect, useState} from "react"
import '../Movieslist/movielist.css'
import { useParams } from "react-router-dom"
import Cards from '../Card/Card'

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=0af9936fdd27cbb403e5cdddaba65172&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList