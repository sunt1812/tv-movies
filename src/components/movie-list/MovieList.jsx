import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {Swiper , SwiperSlide} from 'swiper/react'
import tmdbApi, { category } from '../../assets/api/tmdbApi';
import './movie-list.scss'
import MovieCart from '../movie-cart/MovieCart';

const MovieList = props => {
    console.log(props.type)
    const [items, setItems] = useState([]);
    useEffect(()=> {
        const getList = async () => {
            let response = null
            const params ={}
            if(props.type !== "similar") {
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type,{params})
                        break;
                    case category.tv:
                        response = await tmdbApi.getTvList(props.type, {params});
                        break
                    default:
                    console.log("error")
                }
            }else {
                response = await tmdbApi.similar(props.category,props.id)
            }
            setItems(response.results)
        }
        getList()
    },[])
  return (
    <div className="movie-list">
        <Swiper
        grabCursor={true}
        slidesPerView={"auto"}
        spaceBetween={10}
        >
            {items.map((item,index) => (
                <SwiperSlide key={index}>
                    <MovieCart item={item} category={props.category}/>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MovieList