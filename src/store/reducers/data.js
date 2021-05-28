import { FETCH_DATA } from "../actions/data";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            const data = action.data;
            return [
                ...data
            ]

    }
    return state
}