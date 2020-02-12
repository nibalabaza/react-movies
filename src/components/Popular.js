import React from 'react';
import Card from './movie/Card'

class Popular extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
        };
    } 

    

    // to call the list of the films , we use fetch
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=05087881c6fa5b39fadc392fad479fd4")
          .then(res => res.json())
          .then(json => {
          console.log("DidMount")
          console.log("json.movies", json.movies)

          this.setState({
            movies: json.results
          });
        });
      }

    render() {
        return (
            <div> 
            <h2>Popular</h2>
            {this.state.movies.map((movie) => {
                return <Card movie={movie} key={movie.id}/>
            })}
            
            </div>
        );
    }
}

export default Popular;