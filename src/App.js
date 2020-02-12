import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Discover from './components/Discover';
import Popular from './components/Popular';
import MyList from './components/MyList';
import PopularBattle from './components/PopularBattle'
import Card from '../src/components/movie/Card'


class App extends Component {
constructor (props) {
  super(props);
  this.state={
    myList:[]
  }
  this.updateList = this.updateList.bind.bind(this)
}

updateList(movieId) {
    const myList = this.state.myList;
    myList.push(movieId);
    this.setState({
     myList
    })
  }


  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">This week</Link>
              </li>
              <li>
                <Link to="/popular">Popular</Link>
              </li>
              <li>
                <Link to="/my-list">My List</Link>
              </li>
              <li>
                <Link to="/popular-battle">popular battle</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/popular">
              <Popular />
            </Route>
            <Route path="/my-list">
              <MyList 
             list = {this.state.myList} />
            </Route>
            <Route path="/popular-battle">
              <PopularBattle 
              updateListFn = {this.updateList}/>
            </Route>
            <Route path="/">
              <Discover />
            </Route>
            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


// to display un array, we use map in react 
// in handlebars , we use for each
