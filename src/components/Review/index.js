import React from "react";
import StarRating from "react-star-ratings";

/** styles */
import './styles.css';

function Review ({data}) {

    const formatDate = () => {
        // formats the date value that is passed by data.
        let date = new Date (data.reviewDate);
        return `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`
    };

    return (
        <div className="review-container">
            <div className="top-row">
                <div className="company">{data.customer.companyName}</div>
                <div className="review-specs">
                    
                    <div className="spec two">{formatDate()}</div>
                    <div className="spec three">{`@${data.source}`}</div>
                    <div className="spec one">
                        <StarRating 
                            rating={data.rating}
                            StarRatingColor="blue"
                            numberOfStar={5}
                            name="rating"
                            starDimension="20px"
                            starSpacing="5px"/>
                    </div>
                </div>
            </div>
            <div className="author">by {data.author}</div>
            <br/>
            <p className="review-text">{data.content}</p>
        </div>
    );
};

export default Review;