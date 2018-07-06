import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import '../../index.css';

export default class MovieList extends Component{
    static propTypes = {}

    state = {
        movies: []
    };

    componentDidMount(){
        this.loadData(this.props.match.params.category);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.match.params.category !== nextProps.match.params.category) {
            this.loadData(nextProps.match.params.category);
        }
    }

    loadData(category) {
        fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=2be7d8ea984bb55c6cefc8e86802870c&language=en-US&page=1`)
            .then((response) => response.json())
            .then((data) => this.setState({
                movies: data.results
            }, () => (console.log(this.state))))
            .catch()
    }

    render(){
        console.log('Movies', this.props);
        return (
            <div>
                <ul className='container'>
                    {this.state.movies.map((elem) => <MovieCard
                    title={elem.title}
                    text={elem.overview}
                    rating={elem.vote_average}
                    key={elem.id}
                    poster={elem.poster_path}
                    />)}
                </ul>
            </div>
        )
    }
}