import React from 'react';


class MyList extends React.Component {
    constructor(props){
        super(props);

        this.getFromLocalStorage = this.getFromLocalStorage.bind(this)
    }

    getFromLocalStorage() {
        this.props.saveLocalStorage(this.props.movie)
        
    }
    render() {
        console.log('MyList#render this.props', this.props);

        const list = [];
        const fetchmovieId = (movieId) => 
            fetch(``)
            .then(res => res.json())
            .then(data => data[0]);
            Promise.all(list.map(movieId => fetchmovieId(movieId)))
            .then((list) => {
            // receives an array of responses
            list.forEach(movieId => {
            console.log('movieId.capital', movieId.capital);
});
});
        return (
            
            // <h2>MY List</h2>
            <div>
                
               
                 
                       {/* {this.props.list.map((list, index) => {
                            return (
                                <li key={index}>{list} </li>
                            );
                        })} */}
             
            </div>

        );
    }
}

export default MyList;


