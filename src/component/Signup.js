import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/Login.scss';
import {Link} from 'react-router-dom';

export default class Signup extends Component {
    componentDidUpdate(){ 
        if(this.props.success.error===0)this.props.history.push("/") 
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary">
                    
                    {/* <Link to ={'/addpoll'} className='text-white'>Add Poll</Link> */}
                    <Link to ={'/login'} className='log_in_style'>Log in</Link>
                    {/* <Link to ={'/pollslist'} className='text-white'>Poll-List</Link> */}
                </nav>    



                <div className = 'main-page'>
                    <div className="col-md-6 login-form-2">
                        <h3 >SignUp for  </h3>
                        <form onSubmit = {(e) => this.props.handleSubmit(e)}  >
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your User name *" value = {this.props.userName} onChange = {(e) => this.props.handleUserName(e)} />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Your Password *" value = {this.props.passWord} onChange = {(e) => this.props.handlePassword(e)}  />
                            </div>
                            <div className="form-group">
                                <select type="text" className="form-control" placeholder="Your role *" value = {this.props.role} onChange = {(e) =>this.props.handleRole(e)} >
                                    <option>admin</option>
                                    <option>guest</option>
                                    <option>staff</option>
                                    <option>student</option>
                                </select>
                            </div>
                            <div className="form-group ">
                                <input type="submit" className="btnSubmit btn-success " value="Signup" />
                            </div>
                            <div className="form-group">
                                <div className ='border border-danger bg-white'>
                                    { 
                                        this.props.success === '' ? '': (this.props.success.error === 1 ? this.props.success.message : 'Sign-up Successfully' )
                                    }
                                </div>
                            </div>    
                        </form>
                    </div>
                </div>
            </div>
                
        )
    }
}




