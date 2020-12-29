import React from "react";
import { useSelector } from 'react-redux';

/** components */
import Button from "../Button";
/** styles */
import "./styles.css";

function BottomNav () {

    const pageNumber = useSelector(state => state.pageNumber);

    return (
        <div className="bottom-nav-container">
            <Button style={{float: 'right', marginLeft: '10px'}} name="next"/>
            {(pageNumber > 1) ? (
                <Button style={{float: 'right' }} name="previous"/>
            ) : (null)}
        </div>
    );
};

export default BottomNav;