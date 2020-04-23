import React from 'react'
import { connect } from 'react-redux'
import { fetchAdvice } from '../store/actions/adviceActions'
import Loader from 'react-loader-spinner'


const AdviceTeller = props => {
    return(
        <>
        <div className="adviceCard">
            <div className="adviceText">
                {props.isFetching && (
                    <Loader type="ThreeDots" color="red" height={50} width={50} />
                )}
                {props.advice && <h1>"{props.advice}"</h1>}
                {props.error && <p className="error">{props.error}</p>}
            </div>
        </div>
        <div className="button" onClick={props.fetchAdvice}>Seek Advice</div>
        </>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        advice: state.advice.advice,
        isFetching: state.advice.isFetching,
        error: state.advice.error
    }
}

export default connect(mapStateToProps, { fetchAdvice })(AdviceTeller)