import axios from 'axios';
export const FETCH_DATA = "FETCH_DATA";
export const LOADING_TRUE = "LOADING_TRUE";
export const LOADING_FALSE = "LOADING_FALSE";


export const fetchData = data => {
    return {
        type: FETCH_DATA,
        data: data
    }
}

export const loadingTrue = () => {
    return {
        type: LOADING_TRUE,
        loading: true
    }
}

export const loadingFalse = () => {
    return {
        type: LOADING_FALSE,
        loading: false
    }
}

export const asyncfetchData = () => {
    return (dispatch) => {
        dispatch(loadingTrue());
        axios.get("https://vegetable-store-backend.herokuapp.com/sabzi")
            .then(response => {
                const data = response.data;
                dispatch(fetchData(data));
                dispatch(loadingFalse());
            })
            .catch(err => {
                console.log(err);
            })
    }
}