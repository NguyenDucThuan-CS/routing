import * as ActionType from "./constant"


let initialState = {
    loading: false,
    data: null,
    error: null,
}


export const addUserReducer = (state = initialState, action) => {
        switch (action.type) {
            case ActionType.ADD_USER_REQUEST:
                state.loading = true;
                state.data = null;
                state.error = null;
                return {...state}
            case ActionType.ADD_USER_SUCCESS:
                state.loading = false;
                state.data = action.payload;
                state.error = null;
                return {...state}
           case ActionType.ADD_USER_FAILED:
                state.loading = false;
                state.data = null;
                state.error = action.payload;
                return {...state}
            default:
                return {...state}
        }
}