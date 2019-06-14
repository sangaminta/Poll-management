import React, { Component } from 'react'
import Viewdetail from '../component/Viewdetail';
import { connect } from 'react-redux';
import{ pollSetId } from '../redux/action/LoginAction';
class Viewdetailpolls extends Component {

    componentDidMount(){
        const id = this.props.match.params.id
        console.log("id value",id)
        this.props.actionForSetId(id);
    }
    render() {
        return (
            <div>
                <Viewdetail  {...this.props.success} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    actionForSetId:(data) => dispatch(pollSetId(data))
    }
}

const  mapStateToProps = (state) => {
    return {
        id:state.Pollidreducer.id,
        success:state.Pollidreducer.success
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Viewdetailpolls);
