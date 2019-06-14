import React, { Component } from 'react'
import Polladd from '../component/Polladd';
import { connect } from 'react-redux';
import {pollTitle, pollSubmit} from '../redux/action/LoginAction'
class Addpollpage extends Component {

    handlePoleTitle =(e)=> {
        const text = e.target.value;
        const name = e.target.name
        this.props.actionForPoleTitle({name,text});
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        const pollDetail = this.props.pollData
        this.props.actionForPollDetailSubmit(pollDetail);

    } 
    render() {

        return (
            <div>
                <Polladd 
                handlePoleTitle = {this.handlePoleTitle} 
                handleSubmit = {this.handleSubmit}
                {...this.props.pollData}
                history={this.props.history}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('full state-poll',state);
    return {
        pollData:state.Addpollreducer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionForPoleTitle:(pollData) => dispatch(pollTitle(pollData)),
        actionForPollDetailSubmit:(pollDetail) => dispatch(pollSubmit(pollDetail))
    }
}   

export default connect(mapStateToProps, mapDispatchToProps)(Addpollpage);
