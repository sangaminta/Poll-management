import React, { Component } from "react";
import Viewdetail from "../component/Viewdetail";
import { connect } from "react-redux";
import {
  pollSetId,
  selectOption,
  userdovote
} from "../redux/action/LoginAction";
class Viewdetailpolls extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("id value", id);
    this.props.actionForSetId(id);
  }

  handleChecked = option => {
    console.log(option, "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL");
    this.props.actionForSetOption(option);
  };

  handleClick = e => {
    const value = {
      name: this.props.option,
      id: this.props.id
    };
    this.props.actionForDoVote(value);
  };

  render() {
    return (
      <div>
        <Viewdetail
          handleChecked={this.handleChecked}
          {...this.props.success}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actionForSetId: data => dispatch(pollSetId(data)),
    actionForSetOption: name => dispatch(selectOption(name)),
    actionForDoVote: user => dispatch(userdovote(user))
  };
};

const mapStateToProps = state => {
  return {
    id: state.Pollidreducer.id,
    success: state.Pollidreducer.success,
    option: state.Pollidreducer.option
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Viewdetailpolls);
