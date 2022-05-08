import React, { useEffect, useRef, useState } from 'react'
import {Swiper , SwiperSlide} from 'swiper/react'
import tmdbApi, { movieType } from '../../assets/api/tmdbApi'
import Modal, { ModalContent } from '../modal/Modal'
import './hero-slide.scss'
import HeroSlideItem from './HeroSlideItem'

const HeroSlide = () => {
    const [movieItems, setMovieItems] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
            const params = {page: 1}
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, {params});
                setMovieItems(response.results.slice(1, 4));
                console.log(response);
            } catch {
                console.log('error');
            }
        }
        getMovies();
    }, []);
  return (
    <div className="hero-slide">
        <Swiper
        spaceBetween={0}
        slidesPerView ={1}
        grabCursor={true}
        >
            {movieItems.map((item,index) => (
                <SwiperSlide key={index}>
                    {({isActive}) => (
                        <HeroSlideItem className={`${isActive ? 'active' : ''}`} item={item}/>
                    )}
                </SwiperSlide>
            ))}
        </Swiper>
        {
            movieItems.map((item, i) => <TrailerModal key={i} item={item}/>)
        }
    </div>
  )
}
const TrailerModal = props => {
    const item = props.item;

    const iframeRef = useRef(null);

    const onClose = () => iframeRef.current.setAttribute('src', '');

    return (
        <Modal active={false} id={`modal_${item.id}`}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
            </ModalContent>
        </Modal>
    )
}
export default HeroSlide