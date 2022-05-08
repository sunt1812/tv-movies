import React from 'react'
import { Link } from 'react-router-dom'
import apiConfig from '../../assets/api/apiConfig'
import { category } from '../../assets/api/tmdbApi'
import Button from '../button/Button'
import './movie-cart.scss'

const MovieCart = props => {
    const {item } = props
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path)
    const link = '/' + category[props.category] + '/' + item.id;
    
  return (
    <Link to={link}>
        <div className="movie-cart" style={{backgroundImage: `url(${bg})`}}>
            <Button>
                <i className="bx bx-play"></i>
            </Button>
        </div>
        <h3 className="title">
            {item.title || item.name}
        </h3>
    </Link>
  )
}

export default MovieCart