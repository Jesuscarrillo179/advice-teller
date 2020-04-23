import axios from 'axios'

export const fetchAdvice = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_ADVICE_START' })
        axios.get('https://api.adviceslip.com/advice').then(res => {
            dispatch({ type: 'FETCH_ADVICE_SUCCESS', payload: res.data.slip.advice})
        }).catch(err =>{
            dispatch({ type: 'FETCH_ADVICE_FAILURE', payload: `Error ${err.response.status}: ${err.response.data}`})
        })
    }
}