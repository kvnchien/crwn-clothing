//Set an initial state value
const INITIAL_STATE = {
    currentUser: null
}

//If the state is not set, we set the state to the initial state
const userReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }

        default: 
            return state;
    }
}

export default userReducer;