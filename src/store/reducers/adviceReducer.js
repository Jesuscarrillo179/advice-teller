const initialState = {
    advice: '',
    isFetching: false,
    error: ''
}

export const adviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_ADVICE_START':
            return {
                ...state,
                isFetching: true
            }
        case 'FETCH_ADVICE_SUCCESS':
            return {
                ...state,
                isFetching: false,
                
                advice: action.payload,
                error: ''
            }
        case 'FETCH_ADVICE_FAILURE':
            return {
                ...state,
                isFetching: true,
                error: action.payload
            }
        default:
        return state;
    }
}