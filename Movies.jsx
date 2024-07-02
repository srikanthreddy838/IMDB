import React, { useEffect, useState } from 'react'
import Moviecard from './Moviecard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({addtoWatchlist,removeWatchlist,watchlist}) {
    
    const [movies,setMovies] = useState([])
    const [pageNo,setPageNo] =useState(1)

    const handlePrev =()=>{
        if (pageNo===1){
            setPageNo(pageNo)
        }else{
            setPageNo(pageNo-1)
        }
       
    }
    const handleForw=()=>{
        setPageNo(pageNo+1)
    }
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c1b9406bcc42bfa90a2d3875a8eeef22&language=en-US&page=${pageNo}`).then(function(response){
            setMovies(response.data.results)
        })
    },[pageNo])
  return (
    <div>
        <div className='p-4 text-2xl font-bold m-4 text-center'>Trending Movies</div>
        <div className='flex flex-row flex-wrap justify-around gap-4'>
          
          {movies.map((movieObj)=>{
            return <Moviecard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} original_title={movieObj.original_title} addtoWatchlist={addtoWatchlist} removeWatchlist={removeWatchlist} watchlist={watchlist}/> 
          })}
        </div>
        <Pagination pageNo={pageNo}  handleForw={handleForw} handlePrev={handlePrev} />
    </div>
  )
}

export default Movies

//https://api.themoviedb.org/3/movie/popular?api_key=c1b9406bcc42bfa90a2d3875a8eeef22&language=en-US&page=1