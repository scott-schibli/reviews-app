import React from "react";
import { useSelector } from "react-redux";

/** componenets */
import Button from "../Button";
/** styles */
import './styles.css';

function TopNav () {

    const state = useSelector(state => state);

    return (
        <div className="top-nav-container">
            <div className="first-group">
                <div className="rating-container">
                    <div className="avg-rating-text">Average Rating</div>
                    <div className="avg-rating">{state.averageRating}</div>
                </div>
                <div className="page-number">{state.pageNumber}</div>
            </div>
            <Button style={{float: 'right', marginLeft: '10px'}} name="next"/>
            {(state.pageNumber > 1) ? (
                <Button style={{float: 'right' }} name="previous"/>
            ) : (null)}
        </div>
    );
};

export default TopNav;