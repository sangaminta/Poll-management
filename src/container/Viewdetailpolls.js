import React, { Component } from "react";
import Viewdetail from "../component/Viewdetail";
import { connect } from "react-redux";
import {
  pollSetId,
  selectOption,
  userdovote,
  isedit,
  edit_text,
  addtitle,
  deleteoption,
  deleteoptionRequest,
  addOption,
  takeNewOptionValue,
  submitNewOptionValue,
  submitNewOptionValueRequest,
  deletePoll ,
  deletePollRequest,
  setErrorValue,
  newOptionForPoll,
  resetNewOption,
  optionAddInPoll,
  optionAddInPollRequest
  
} from "../redux/action/LoginAction";

class Viewdetailpolls extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.actionForSetId(id);
  } 
  componentDidUpdate(previousProps) {
    const { pollidData } = this.props;
    const id = this.props.match.params.id;
    if (
      pollidData.isDeleteSuccess !== previousProps.pollidData.isDeleteSuccess
    ) {
      this.props.actionForSetId(id);
    }

    if (
      pollidData.isAddOptionSuccess !== previousProps.pollidData.isAddOptionSuccess
    ) {
     
      this.props.actionForSetId(id);
    }

    if(pollidData.isNewOption !==previousProps.pollidData.isNewOption)
    {
      this.props.actionForSetId(id);
    }
    

    if(this.props.deleteIdSuccess.error === 0 ) {
      this.props.history.push("/pollslist")
    }


  }
  componentWillUnmount() {
    this.props.actionForSetError()
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
    const isEdit = !this.props.isEdit;
    this.props.actionForEditTitle(isEdit);
  };

  handleEditTitle = title => {
    this.props.actionForTextValue(title);
  };

  updateEditText = e => {
    e.preventDefault();
    const submit_value = {
      pollId: this.props.id,
      pollTitle: this.props.changedTittle
    };
    this.props.actionForSubmitNewTitle(submit_value);
  };

  handleDeleteOption = option => {
    const delete_value = {
      pollId: this.props.id,
      polloption: option
    };
    this.props.deleteoptionRequest();
    this.props.actionForDeleteOption(delete_value);
  };

  addPollOption = e => {
    const isAddOption = !this.props.isAddOption;
    this.props.actionForAddNewOption(isAddOption);
  }

  addNewOptionInPoll = e => {
    const value = e.target.value;
    this.props.actionForGiveNewPollOption(value);
  }

  submitNewOption = e => {
    e.preventDefault();
    const newOptionValue = {
      value : this.props.newOption,
      id: this.props.id
    }
   this.props.actionForSubmitNewOptionRequest();
   this.props.actionForSubmitNewOption(newOptionValue);
  }

  deletePoll = e => {
    
    const id = this.props.id;
    this.props.actionForDeletePollRequest();
    this.props.actionForDeletePoll(id);
  }

  handleChange = e => {
    const value = e.target.value;
    this.props.actionForValueOfNewOption(value);
  }

  handleResetOption = e => {
    this.props.actionForResetOption();
  }

  newOptionAdd = e => {
   const value = {
     id : this.props.id,
     option:this.props.placeValue
   }
   
    if(value)
    {
      this.props.actionForPollAddNewOptionRequest()
      this.props.actionForPollAddNewOption(value)
    }
  }


  render() {
    
    return (
      
        <Viewdetail
          handleChecked={this.handleChecked}
          {...this.props.success}
          handleClick={this.handleClick}
          handleIsEdit={this.handleIsEdit}
          isEdit={this.props.isEdit}
          handleEditTitle={this.handleEditTitle}
          updateEditText={this.updateEditText}
          handleDeleteOption={this.handleDeleteOption}
          addPollOption = {this.addPollOption}
          isAddOption={this.props.isAddOption}
          addNewOptionInPoll = {this.addNewOptionInPoll}
          submitNewOption = {this.submitNewOption}
          deletePoll = {this.deletePoll}
          placeValue = {this.props.placeValue}
          handleChange = {this.handleChange}
          handleResetOption = {this.handleResetOption}
          newOptionAdd = {this.newOptionAdd}
        />
      
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actionForSetId: data => dispatch(pollSetId(data)),
    actionForSetOption: name => dispatch(selectOption(name)),
    actionForDoVote: user => dispatch(userdovote(user)),
    actionForEditTitle: edit => dispatch(isedit(edit)),
    actionForTextValue: text => dispatch(edit_text(text)),
    actionForSubmitNewTitle: title => dispatch(addtitle(title)),
    actionForDeleteOption: value => dispatch(deleteoption(value)),
    deleteoptionRequest: () => dispatch(deleteoptionRequest()),
    actionForAddNewOption: isNew => dispatch(addOption(isNew)),
    actionForGiveNewPollOption: newOption => dispatch(takeNewOptionValue(newOption)),
    actionForSubmitNewOption:value=> dispatch(submitNewOptionValue(value)),
    actionForSubmitNewOptionRequest:()=> dispatch(submitNewOptionValueRequest()),
    actionForDeletePoll: id => dispatch(deletePoll(id)),
    actionForDeletePollRequest:()=>dispatch(deletePollRequest()),
    actionForSetError: () => dispatch(setErrorValue()),
    actionForValueOfNewOption: value => dispatch (newOptionForPoll(value)),
    actionForResetOption : ()=> dispatch (resetNewOption()),
    actionForPollAddNewOption: value => dispatch(optionAddInPoll(value)),
    actionForPollAddNewOptionRequest:()=>dispatch(optionAddInPollRequest())


  };
};

const mapStateToProps = state => {
  return {
    id: state.Pollidreducer.id,
    success: state.Pollidreducer.success,
    option: state.Pollidreducer.option,
    isEdit: state.Pollidreducer.isEdit,
    changedTittle: state.Pollidreducer.changedTittle,
    delete_option_success: state.Pollidreducer.delete_option_success,
    pollidData: state.Pollidreducer,
    isAddOption:state.Pollidreducer.isAddOption,
    newOption:state.Pollidreducer.newOption,
    deleteIdSuccess : state.Pollidreducer.deleteIdSuccess,
    placeValue: state.Pollidreducer.placeValue
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Viewdetailpolls);
