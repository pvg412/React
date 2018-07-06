import React, {Component, Fragment} from 'react';
import './App.css';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Movies from './components/Movies/Movies';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Fragment>
            <Header/>
            <Switch>
                <Route exact path='/home' render={() => <h2>Home page</h2>} />
                <Route path='/movies' component={Movies}/>
                <Route exact path='/about' render={() => <h2>About page</h2>} />
                <Route component={NotFound}/>
            </Switch>
        </Fragment>
    );
  }
}

export default App;
