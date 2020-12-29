import React from "react";
import {useDispatch} from "react-redux";

/** redux */
import { setAvgRating } from "../../redux/store";
/** components */
import Review from "../Review";
/** styles */
import "./styles.css";

function ReviewsList ({reviewsData}) {

    const dispatch = useDispatch();
    
    React.useEffect(()=>{
        // Called when reviewsData updates & checks to see if reviews data exists and the lenght is not 0
        // if so, loops through and retrieves the average rating from the reviews on the page.
        
        let total = 0;
        if (!reviewsData || reviewsData.length <= 0) return;
        reviewsData.forEach(review => {
            total = total + review.rating;
        });
        dispatch(setAvgRating(total/reviewsData.length));
    },[reviewsData, dispatch]);
    
    return (
        <div className="reviews-container">
            <ul className="list">
                {(reviewsData && reviewsData.length>0) ? (
                    reviewsData.map((review, index) => {
                        return <li key={index} className="list_item"><Review data={review}/></li>
                    })
                ) : (null)}  
            </ul>
        </div>
    )
};

export default ReviewsList;