import React, { Component } from 'react'
import Polllist from '../component/Polllist';
import{ pollsRequestApiData } from '../redux/action/LoginAction';
import { connect } from 'react-redux';

class Pollslistpage extends Component {
    componentDidMount(){
        this.props.actionForShowPollsList();
    }

    render() {
        return (
            <div>
                <Polllist pollsDetail={this.props.pollsDetail} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionForShowPollsList:(data) => dispatch(pollsRequestApiData(data))
    }
}

const  mapStateToProps = (state) => {
    return {
        pollsDetail:state.Pollslistreducer.pollsDetail
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Pollslistpage);

