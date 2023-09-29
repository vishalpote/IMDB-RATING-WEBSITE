
// api_key="https://api.themoviedb.org/3/movie/popular?api_key=0af9936fdd27cbb403e5cdddaba65172&language=en-US"
import React, { useEffect, useState } from 'react'
import '../Home/home.css'
import MovieList from '../../Components/Movieslist/MovieList'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import  {Carousel} from 'react-responsive-carousel'
import { Link } from 'react-router-dom'
// import { json } from 'react-router-dom/dist/umd/react-router-dom.development'
const Home = () => {
const [popularMovie,setPopularMovie]=useState([])
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=0af9936fdd27cbb403e5cdddaba65172&language=en-US")
        .then(res=>res.json())
        .then(data=>setPopularMovie(data.results))
        
    },[])
   
  return (
    <>
        <div className="poster">
            <Carousel 
            showThumbs={false}
            autoPlay={true}
            transitionTime={2}
            infiniteLoop={true}
            showStatus={true}
            >
                {
                    popularMovie.map((movie)=>{
                        return(
                            <>
                            <Link style={{textDecoration:"none"}} to={`movie/${movie.id}`}>
                                    <div className="posterImage" key={movie.id}>  
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt=''></img>
                                    </div>
                                    <div className="posterImage__overlay">
                                        <div className="posterImage__title">{movie ? movie.original_title :""}</div>
                                        <div className="posterImage__runtime">{movie ? movie.release_date : ""} 
                                        <span className='posterImage__rating'>{movie ? movie.vote_average:""}
                                        <i className="fa-solid fa-star">{" "}</i>
                                        </span>
                                        </div>
                                        <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                    </div>
                            </Link>
                            </>
                        )
                    })
                }
            </Carousel>
                <MovieList></MovieList>
        </div>
    </>
  )
}

export default Home
