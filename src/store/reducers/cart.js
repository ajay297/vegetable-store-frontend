import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_FROM_CART } from "../actions/cart";

const initialState = {}

export default (state = initialState, action) => {
    const id = action._id;
    switch (action.type) {

        case ADD_TO_CART:

            if (id in state) {
                return {
                    ...state,
                    [id]: state[id] + 1
                }
            }
            else {
                return {
                    ...state,
                    [id]: 1
                }
            }


        case REMOVE_FROM_CART:
            return {
                ...state,
                [id]: state[id] - 1
            }
        case CLEAR_FROM_CART:
            return {

            }
    }
    return state
}