import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `api-key=${NYT_API_KEY}&query=`

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component{
  constructor(){
    super()

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleChange(event){
    this.setState({searchTerm: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    fetch(URL.concat(this.state.searchTerm))
      .then(resp => resp.json())
      .then(resp => this.setState( {reviews: resp.results}))

  }

  render(){
    return(
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search reviews:
          </label>
          <input type="submit" value="Submit" onChange={this.handleChange}></input>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
