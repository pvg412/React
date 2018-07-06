import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink, Route} from  'react-router-dom';
import MovieList from "../MovieList/MovieList";

class Movies extends Component{

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink to={this.props.match.path + '/now_playing'}>Now playing</NavLink>
                        <NavLink to={this.props.match.path + '/popular'}>Popular</NavLink>
                        <NavLink to={this.props.match.path + '/top_rated'}>Top rated</NavLink>
                    </li>
                </ul>
                <Route path={this.props.match.path + '/:category'} component={MovieList}/>
            </div>
        )
    }
}

export default Movies;