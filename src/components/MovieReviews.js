import React from 'react';

const MovieReviews = ({ reviews }) => {
  return(
    <div className="review-list">
      {reviews.map(review => review.headline)}
    </div>
  )

}



export default MovieReviews;
