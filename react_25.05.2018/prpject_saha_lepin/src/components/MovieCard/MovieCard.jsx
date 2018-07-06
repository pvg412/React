import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

const MovieCard = ({title, text, rating, poster}) => {
    return (
        <li className='item'>
            <img className='img' src={'http://image.tmdb.org/t/p/' + 'w185' + poster} alt="poster"/>
            <h2 className='movie-name'>{title}</h2>
            <p className='movie-text'>{text}</p>
            <h3 className='movie-rating'>{rating} из 10</h3>
        </li>
    )
};

MovieCard.propTypes = {
    title:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired,
    poster:PropTypes.string
};

MovieCard.defaultProps = {
    poster: '/no_img.jpg'
};

export default MovieCard;