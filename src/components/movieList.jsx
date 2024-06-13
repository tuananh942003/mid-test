import React from 'react'
import "./movieList.css"
const MovieList = (props) => {
  return (
    
    <div className='movieList_container'>
        
        <div className='MovieList'>
            <div className='movie-img'><img src={props.img} alt="" /></div>
            <div className='decsription'>
                <span style={{color : "rgba(255, 255, 255, 1)",textAlign:"center",fontWeight:"100",lineHeight:"50px"}}> Episode {props.episode}</span><br />
                <span className='moiveName' style={{color :"rgba(255, 255, 255, 1)",fontSize:"16px",fontWeight:"600"}}>{props.movieName} </span>
            </div>
        </div>

    </div>
  )
}

export default MovieList