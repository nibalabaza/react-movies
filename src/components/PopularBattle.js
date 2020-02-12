import React from 'react';
import Card from './movie/Card'

class Popular extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            currentPage: 1
        };
        this.onClick = this.onClick.bind(this);
        this.saveLocalStorage = this.saveLocalStorage.bind(this)
    }

    saveLocalStorage(movieId){
        console.log("movieId", movieId);

       let myList = JSON.parse(localStorage.getItem('my-list'));

    //    myList= myList ? myList : []
       if(myList === null){
           myList = []
       }
    

       if (!myList.includes(movieId)){
           myList.push(movieId)
       }
       
       console.log("myList", myList)
        // const myNewList = [];
        // myNewList.push({movieId});

       localStorage.setItem('my-list', JSON.stringify(myList));
       
      
        // this.setState({
        //     my_list:movieId
        // })


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
      onClick(e) {
        this.props.updateListFn(this.state.movieId)

        this.saveLocalStorage(e)
          const currentPage= this.state.currentPage +1;
            console.log('e', e)
                this.setState({
                 currentPage            
          })

      }

    render() {
        const first = (this.state.currentPage - 1) *2
        const second = first + 1

        // const movie1 = this.state.movies[0]
        // we have to do if befor return because AjAx ne except if
         if (this.state.movies.length === 0) {
            return null
        }
        // right now ,the movies will not display because the array is empty. it still like we put it in the state  movies: [],
        return (
            <div> 
            <h2>Popular battle</h2>
            <Card movie={this.state.movies[first]}
            onClick={this.onClick} />
            <Card movie={this.state.movies[second]}
            onClick={this.onClick}/>
             {/* to display the first two films only */}
             
             {/* <button movie={this.state.currentPage}>
            </button> */}

                
            
            </div>
        );
    }
}

export default Popular;






// import React from 'react';
// import Card from '../components/movie/Card'

// class PopularBattle extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             currentPage: 1
//         };
//         this.onClick = this.onClick.bind(this); 
//     }

//     onClick(event) {
//         this.setState({
//           currentPage: Number(event.target.id),
          
//         //   movie: json.ressult[1]
//         });
//       }

//     render() {
       
//         return (
//             <div>
//             <h2>PopularBattle</h2>
//             <Card movie={this.state.currentPage}
//             onClick={this.onClick} />

//             </div>
//         );
//     }
// }

// export default PopularBattle;