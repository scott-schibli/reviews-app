import axios from "axios";

export function loadReviews(source, pageNumber=1) {
/** 
 * Calls api and returns review data at the specified page. 
 * @params: source: CancelToken used to cancel axios request if component is unmounted
 */
    return new Promise ((resolve, reject) => {
        axios.get(process.env.REACT_APP_API_URL, {
            headers: {"x-api-key": process.env.REACT_APP_API_KEY},
            params: {"page": pageNumber},
            cancelToken: source.token,
            timeout: 30000 // request cancelled after 30 seconds
        }).then((res)=>{ 
            if (res.status >= 200 && res.status < 300) {
                resolve({
                    reviews: res.data.reviews,
                    totalPages: res.data.paging.totalPages
                })
            }else{
                reject("Success pulling review, BUT status != success. status=", res.status)
            }
        }).catch((err)=>{
            if (axios.isCancel(err)){
                reject("axios cancelled server request", err)
            }
                reject("Error pulling reviews: ",err)
        });
    });
};
