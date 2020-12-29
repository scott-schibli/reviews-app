import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

/** redux */
import { setTotalPages } from '../../redux/store';
/** components */
import TopNav from "../TopNav";
import ReviewsList from "../ReviewsList";
import BottomNav from "../BottomNav";
/** styles */
import "./styles.css";
/** utils */
import { loadReviews } from "../../server/api";

function App() {

    const pageNumber = useSelector(state => state.pageNumber);
    const dispatch = useDispatch()

    let isMounted = React.useRef(false);
    const [reviewsData, setReviewsData] = React.useState();
    const [dataError, setDataError] = React.useState();

    React.useEffect(()=>{
        // Called on first load and whenever pageNumber (redux store value) is changed, pulls reviews using api. 
        // Passes cancel token if component unmounts to cancel the api call. 
    
        isMounted.current = true;
        const source = axios.CancelToken.source();
        loadReviews(source,pageNumber).then((res)=>{
            if (isMounted.current===true){
                dispatch(setTotalPages(res.totalPages))
                if (pageNumber === 1 && res.reviews.length <= 0) { // if pull w/ page 1 has nothing
                    alert("There are no reviews in the server");
                    return;
                }else if (res.length <= 0) { // if pull w/ page > 1 has nothing
                    alert ("No more reviews in server");
                    return;
                };
                setReviewsData(res.reviews);
            };
        }).catch((err)=>{
            setDataError(err)
            alert(err);
        });
        return () => {
            isMounted.current=false;
            source.cancel();
        };
    },[pageNumber, dispatch]);

    return (
        <div className="App">
            <div data-testid="app-name" className="app-name">Interview Reviews App</div>  
            {(reviewsData) ? (
                <div className="content-div">
                    <TopNav/>
                    <ReviewsList reviewsData={reviewsData}/>
                    <BottomNav/>
                </div>
            ) : (dataError) ? (
                <div className="data-error">There was an error pulling videos from the server: {dataError}</div>
            ) : (null)}
        </div>
    );
};

export default App;
