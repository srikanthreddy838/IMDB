import React,{useEffect, useState} from 'react'
import genresid from './Utility/Genres'


function Watchlist({watchlist,setWatchlist,removeWatchlist}) {

    let [search, setSearch] = useState('')
    const [genreList,setGenreList] = useState(['All Genre'])
    const [currGenre,setCurrGnre]=useState('All Genre')

    let handleFilter = (s)=>{
        setCurrGnre(s)
    }
    let handlesearch=(e)=>
        {
            setSearch(e.target.value)
        }

    let sortIncrease=()=>{
       let sortedIncrease= watchlist.sort((MovieA,MovieB)=>{
            return MovieA.vote_average - MovieB.vote_average
        })
        setWatchlist([...sortedIncrease])
    }
    let sortDecrease=()=>{
        let sortedDecrease= watchlist.sort((MovieA,MovieB)=>{
        return MovieB.vote_average - MovieA.vote_average
    })

    setWatchlist([...sortedDecrease])

 }

 useEffect(()=>{
    let temp = watchlist.map((movieObj)=>{
        return genresid[movieObj.genre_ids[0]]
    })
    temp= new Set(temp)
    setGenreList(['All Genre', ...temp])
    console.log(temp)
 },[watchlist])

  return (
    <>
    <div className='flex justify-center flex-wrap m-4'>     
    {genreList.map((s)=>{
        return   <div onClick={()=>handleFilter(s)} className={currGenre == s ? 'flex justify-center h-[3rem] w-[9rem] bg-blue-400/60 rounded-xl text-white font-bold items-center mx-4 py-2':'flex justify-center h-[3rem] w-[9rem] bg-gray-400/60 rounded-xl text-white font-bold items-center mx-4 py-2'}>
        {s}
        </div>
    })}
  

        
    </div>
     <div className='flex justify-center py-4 m-4'>
      <input onChange={handlesearch} value={search} type="text" placeholder='Search for Movies'  className='h-[2rem] w-[18rem] px-4 bg-gray-200 outline-none '/>
    </div>
    <div  className='overflow-hidden rounded-lg border justify-center border-gray-8 m-8'>
    <table className='w-full text-gray-500 text-center'>
        <thead className='border-b-2'>
            <tr>
                
                <th>Name</th>
                <th className='flex justify-center'>
                <div onClick={sortIncrease} className='p-2'><i class="fa-solid fa-arrow-up"></i></div>
                <div className='p-2'>Ratings</div>
                <div onClick={sortDecrease} className='p-2'><i class="fa-solid fa-arrow-down"></i></div>
                </th>
                <th>Popularity</th>
                <th>Genre</th>

            </tr>
        </thead>
        <tbody>
           {watchlist.filter((movieObj)=>{
            if(currGenre == 'All Genre'){
                return true
            }
            else{
                return genresid[movieObj.genre_ids[0]] == currGenre;    
            }
           }).filter((movieObj)=>{
            return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
           }).map((movieObj)=>{
            return <tr className='border-b-2'>
            <td className='flex items-center px-6 py-4'>
                <img className='h-[4rem] w-[8rem] ' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} alt=''/>
            <div className='mx-6'>{movieObj.original_title}</div>
            </td>
            <td>{movieObj.vote_average}</td>
            <td>{movieObj.popularity}</td>
            <td>{genresid[movieObj.genre_ids[0]]}</td>
            <td onClick={()=>removeWatchlist(movieObj)} className='text-red-500'>Delete</td>
           </tr>
           })}
         
        </tbody>

    
    </table>
    </div>
    </>
   
  )
}

export default Watchlist
