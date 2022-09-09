import React from 'react';
import axios from 'axios'
import './MovieDetails.css'

class MovieDetails extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      details: {}
    }
  }

  render() {
    const details = this.state.details
    return (
      <div>
        <img alt="details.title" src={'https://image.tmdb.org/t/p/w300' + details.poster_path}></img>
        <div>片名：{details.title}</div>
        <div>发布日期：{details.release_date}</div>
      </div>
    )
  }
  componentDidMount = () => {
    this.init()
  }
  init = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${window.location.hash.split('=')[1]}?api_key=0971877adc5bdd32c2780c82e0b595ed&language=en-US`).then((res) => {
      console.log(res.data)
      this.setState({
        details: res.data
      })
    })
  }

}

export default MovieDetails;
