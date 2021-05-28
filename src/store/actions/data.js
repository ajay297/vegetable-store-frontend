import axios from 'axios'
export const FETCH_DATA = "FETCH_DATA";


export const fetchData = data => {
    return {
        type: FETCH_DATA,
        data: data
    }
}

export const asyncfetchData = () => {
    return (dispatch) => {
        axios.get("https://vegetable-store-backend.herokuapp.com/sabzi")
            .then(response => {
                const data = response.data;
                dispatch(fetchData(data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}