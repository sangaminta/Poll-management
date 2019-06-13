import React, { Component } from 'react'
import Userlist from '../component/Userlist';
import{ requestApiData } from '../redux/action/LoginAction';
import { connect } from 'react-redux';
class Userlistpage extends Component {
    
    componentDidMount(){
        // const{userDetail} = this.props
        
        
        this.props.actionForShowList();
    }
    render() {
        console.log(this.props.userDetail,'KKKKKKKKKKKKKKKKKKKKKKKKKKKKKK');
        
        return (
            <Userlist  userDetail={this.props.userDetail} />
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    actionForShowList:(data) => dispatch(requestApiData(data))
    }
}

const  mapStateToProps = (state) => {
    return {
        userDetail:state.Userlistreducer.userDetail
    }
}


export default connect (mapStateToProps, mapDispatchToProps)(Userlistpage);
