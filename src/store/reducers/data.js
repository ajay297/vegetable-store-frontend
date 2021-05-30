import { FETCH_DATA, LOADING_FALSE, LOADING_TRUE } from "../actions/data";

const initialState = {
    loading: false,
    data: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            const data = action.data;
            return {
                ...state,
                data: [...data]
            }
        case LOADING_TRUE:
            return {
                ...state,
                loading: true
            }
        case LOADING_FALSE:
            return {
                ...state,
                loading: false
            }

    }
    return state
}