import React from 'react';
import Carousel from '../components/Carousel';
import { useSelector } from 'react-redux';
import Slider from '../components/Slider';
import useFetch from '../hooks/useFetch';

const Home = () => {
    const trendingData = useSelector((state) => state.movieoData.bannerData);
    const { data: nowPlayingData } = useFetch('/movie/now_playing');
    const { data: topRatedData } = useFetch('/movie/top_rated');
    const { data: popularTvShowData } = useFetch('/tv/popular');
    const { data: onTheAirShowData } = useFetch('/tv/on_the_air');

    return (
        <div>
            <Carousel />
            <Slider data={trendingData} heading={'Trending'} trending={true} />
            <Slider data={nowPlayingData} heading={'Now Playing'} media_type={'movie'} />
            <Slider data={topRatedData} heading={'Top Rated Movies'} media_type={'movie'} />
            <Slider data={popularTvShowData} heading={'Popular TV Show'} media_type={'tv'} />
            <Slider data={onTheAirShowData} heading={'On The Air'} media_type={'tv'} />
        </div>
    );
};

export default Home;
