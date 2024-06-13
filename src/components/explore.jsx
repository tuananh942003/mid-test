import React from 'react'
import "./explore.css"
const Explore = (props) => {
    const data = [
        {
          id: "1",
          movieName: "Weather With You",
          description:
            "Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis",
          image: "./1.png",
          episode: "01",
        },]
  return (
    <div className='container'>
        <h1 className='explore_header' >Explore</h1>
        <p className='explore_suggestion'>What are you gonna watch today ?</p>
        <div className='explore_movie'>
            <img src={data[0].image} alt="" />
            <div className='explore_describe' >
                <span className='movie_name'>{data[0].movieName} </span> <br />
                <span className='description'>{data[0].description} </span>
            </div>
        </div>
    </div>
  )
}

export default Explore