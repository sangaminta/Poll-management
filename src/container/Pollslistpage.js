import React, { Component } from "react";
import Polllist from "../component/Polllist";
import { pollsRequestApiData, signOut } from "../redux/action/LoginAction";
import { connect } from "react-redux";

class Pollslistpage extends Component {
  componentDidMount() {
    this.props.actionForShowPollsList();
  }

  handleSignOut = e => {
    localStorage.clear();
    this.props.actionForSignOut();
  };

  render() {
    return (
      <div>
        <Polllist
          pollsDetail={this.props.pollsDetail}
          handleSignOut={this.handleSignOut}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actionForShowPollsList: data => dispatch(pollsRequestApiData(data)),
    actionForSignOut: () => dispatch(signOut())
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
