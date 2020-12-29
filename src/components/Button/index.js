import React from "react";
import { useSelector, useDispatch } from "react-redux";

/** redux */
import { setPageNumber } from "../../redux/store";
/** styles */
import "./styles.css";

function Button ({name, style}) {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const handleClick = (event) => {
        // Depending on whether the button componenet (name) is a next button or previous button
        // it handles either adding 1 or subtracting 1 to the redux stores pageNumber value.
        
        if (name==="next"){
            if (state.pageNumber === state.totalPages) {
                alert("Maximum number of pages reached");
                return;
            }
            dispatch(setPageNumber(state.pageNumber + 1));
        } else if (name==="previous"){
            dispatch(setPageNumber(state.pageNumber - 1));
        }
    };

    return (
        <button 
            style={style}
            className="button"
            onClick={()=>handleClick()}>{name}</button>
    );
};

export default Button;