export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_TO_CART';
export const CLEAR_FROM_CART = 'CLEAR_FROM_CART';

export const addToCart = _id => {
    return {
        type: ADD_TO_CART,
        _id: _id
    }
};
export const removeFromCart = _id => {
    return {
        type: REMOVE_FROM_CART,
        _id: _id
    }
};
export const clearFromCart = () => {
    return {
        type: CLEAR_FROM_CART
    }
}
