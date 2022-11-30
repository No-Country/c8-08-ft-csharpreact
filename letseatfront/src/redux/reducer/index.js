import { 
    POST_NEW_USER
 } from "../actions/actionTypes";

const initialState = {
    users: [],
    user: {},
    owners: [],
    owner: {},

};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_NEW_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        default:
            return state
    }
};

export default rootReducer;