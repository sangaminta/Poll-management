import React, { Component } from 'react'

export default class Polladd extends Component {
     componentDidUpdate(){
        console.log('@@@@@@@@@@@@@@@@@@@@@@@',this.props)

         if(this.props.success.error===0)
        this.props.history.push("/pollslist")
     }
    render() {
    
        return (
            <div>
                <div className = 'main-page'>
                    <div className="col-md-6 login-form-2">
                        <h3 > Adding Poll-  </h3>
                        <form onSubmit = {this.props.handleSubmit}  >
                            <div className="form-group">
                                <input type="text" className="form-control" 
                                placeholder="Your Poll title *" 
                                name="pollTitle" 
                                onChange = { this.props.handlePoleTitle}
                                value = {this.props.pollTitle ? this.props.pollTitle: "" } />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" 
                                placeholder="Poll option-1 *" 
                                name="option1" 
                                value = {this.props.option1 ? this.props.option1:''} 
                                onChange = { this.props.handlePoleTitle}  />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" 
                                placeholder="Poll option-2 *" 
                                name="option2" 
                                value = {this.props.option2 ? this.props.option2:''} 
                                onChange = { this.props.handlePoleTitle} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" 
                                placeholder="Poll option-3 *" 
                                name="option3" 
                                value = {this.props.option3 ? this.props.option3:''}
                                onChange = { this.props.handlePoleTitle} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" 
                                placeholder="Poll option-4 *" 
                                name="option4" 
                                value = {this.props.option4 ? this.props.option4:''} 
                                onChange = { this.props.handlePoleTitle}/>
                            </div>
                           
                            <div className="form-group ">
                                <input type="submit" className="btnSubmit btn-success " value="Submit" />
                            </div>
                            <div className ='border border-danger bg-white'>
                            { 
                                this.props.success === '' ? '':  'pool submit Successfully' 
                            }
                            </div>
                        </form>
                    </div>        
                </div>
            </div>    
        )
    }
}
