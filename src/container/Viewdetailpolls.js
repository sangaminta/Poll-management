import React, { Component } from "react";
import Viewdetail from "../component/Viewdetail";
import { connect } from "react-redux";
import {
  pollSetId,
  selectOption,
  userdovote,
  isedit,
  edit_text
} from "../redux/action/LoginAction";

class Viewdetailpolls extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("id value", id);
    this.props.actionForSetId(id);
  }

  handleChecked = option => {
    this.props.actionForSetOption(option);
  };

  handleClick = e => {
    const value = {
      name: this.props.option,
      id: this.props.id
    };
    this.props.actionForDoVote(value);
  };

  handleIsEdit = e => {
    const isEdit = !(this.props.isEdit);
    this.props.actionForEditTitle(isEdit);
  }

  handleEditTitle = title => {
    
    console.log('vvvvvvvvvvvvvvvvvvvvvv',title)
    this.props.actionForTextValue(title)
  }

  updateEditText = e => {
    e.preventDefault();

  }

  render() {
    console.log('value edit',this.props)
    return (
      <div>
        <Viewdetail
          handleChecked={this.handleChecked}
          {...this.props.success}
          handleClick={this.handleClick}
          handleIsEdit = {this.handleIsEdit}
          isEdit =  {this.props.isEdit}
          handleEditTitle = {this.handleEditTitle}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actionForSetId: data => dispatch(pollSetId(data)),
    actionForSetOption: name => dispatch(selectOption(name)),
    actionForDoVote: user => dispatch(userdovote(user)),
    actionForEditTitle: edit => dispatch(isedit(edit)),
    actionForTextValue: text => dispatch(edit_text(text))
  };
};

const mapStateToProps = state => {
  return {
    id: state.Pollidreducer.id,
    success: state.Pollidreducer.success,
    option: state.Pollidreducer.option,
    isEdit:state.Pollidreducer.isEdit
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Viewdetailpolls);
