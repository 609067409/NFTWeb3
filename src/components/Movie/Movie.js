import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios'
import useMintNft from "../../hooks/useMintNft";
import './Movie.css'
import useContract from "../../hooks/useContract";
import useActiveWeb3 from "../../hooks/useActiveWeb3";

function Movie() {
  const [movieList, setLists,] = useState([]);
  const { mintNft } = useMintNft();
  const { movieIds } = useContract();
  const { account } = useActiveWeb3();
  useEffect(() => {
    function init() {
      axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=0971877adc5bdd32c2780c82e0b595ed&language=en-US&page=1').then((res) => {
        console.log(res.data.results)
        setLists(res.data.results)
      })
    }
    init()
  }, [])


  function toDetails(item) {
    window.location.hash = '/movieDetails?id=' + item.id
  }
  return (
    <div>
      <div className='title'>Movies Now playing</div>
      <div className="movieList">
        {movieList.map((item => {
          return <div className='movieItem' key={item.id} >
            <img className='movieImg' alt={item.original_title} src={'https://image.tmdb.org/t/p/w300' + item.backdrop_path} onClick={
              () => {
                toDetails(item)
              }
            }></img>
            <div className='movieName' onClick={
              () => {
                toDetails(item)
              }
            }>{item.original_title}</div>
            {
              account ? (movieIds?.find((id) => id === Number(item.id)) ? <div className='mint'>minted</div> : <div className='mint' onClick={() => {
                mintNft(
                  `https://image.tmdb.org/t/p/w300${item.poster_path}`,
                  "",
                  item.title,
                  item.id
                );
              }}>mint</div>
              ) : '' }
          </div>
        }))}
      </div>
    </div>
  )
}

export default Movie;
