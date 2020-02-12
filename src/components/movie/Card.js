import React from 'react';
import propTypes from 'prop-types';
import placeholder from '../../placeholder.png'

class Card extends React.Component {

    constructor(props){
        super(props)

        this.myFunction = this.myFunction.bind(this)
    }

    myFunction() {
    this.props.onClick(this.props.movie.id)
    }
    render() {

       const {
           backdrop_path,
           poster_path,
           title,
           overview

    }=this.props.movie;
    const source=poster_path === null?
    placeholder:`https://image.tmdb.org/t/p/w300${poster_path}`
    // it means if the img in json is not defined , appear the img that i have in my folder src

        console.log('this.props', this.props)

        return (
            <div onClick={this.myFunction}>
                {/* this onclick is the one that we defined in popularBattle in the render. we have to call it here because the card(image) how will display the next page (which has the next two films) when we click it */}
                
                <h3>{title}</h3>
                   <img src={source}/>
                   <p>{overview}</p>
                {this.props.movie.title}
                </div>
        );
    }
}

export default Card;