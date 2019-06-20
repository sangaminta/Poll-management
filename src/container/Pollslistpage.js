import React, { Component } from "react";
import Polllist from "../component/Polllist";
import { pollsRequestApiData, signOut ,pollDelete, pollDeleteRequest } from "../redux/action/LoginAction";
import { connect } from "react-redux";

class Pollslistpage extends Component {
  componentDidMount() {
    this.props.actionForShowPollsList();
  }
  // componentWillUpdate(){
  //   this.props.actionForShowPollsList();
  // }

  handleSignOut = e => {
    localStorage.clear();
    this.props.actionForSignOut();
  };

  pollDelete = id_value => {
    const id = id_value
    this.props.actionForDeletePollRequest();
    this.props.actionForDeletePoll(id);
  }



  render() {
    return (
      <div>
        <Polllist
          pollsDetail={this.props.pollsDetail}
          handleSignOut={this.handleSignOut}
          pollDelete = {this.pollDelete}

        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actionForShowPollsList: data => dispatch(pollsRequestApiData(data)),
    actionForSignOut: () => dispatch(signOut()),
    actionForDeletePollRequest:()=>dispatch(pollDeleteRequest()),
    actionForDeletePoll: id => dispatch(pollDelete(id))
    
  };
};

const mapStateToProps = state => {
  return {
    pollsDetail: state.Pollslistreducer.pollsDetail
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pollslistpage);
