import { 
    GET_ALL_RESTAURANTS,
    POST_NEW_USER
 } from "../actions/actionTypes";

const initialState = {
    users: [],
    user: {},
    restaurants: {},
    owner: {},
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_NEW_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case GET_ALL_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload
            }
        default:
            return state
    }
};

export default rootReducer;