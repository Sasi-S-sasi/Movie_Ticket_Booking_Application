import React from 'react';
import axios from 'axios';

export default class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            email :'',
            password :''
        };
        this.EmailChange = this.EmailChange.bind(this);
        this.PasswordChange = this.PasswordChange.bind(this);
        
    }

    EmailChange(event){
        this.setState({email : event.target.value});
    }
    PasswordChange(event){
        this.setState({password : event.target.value});
    }
    

    handleSubmit = event =>{
        event.preventDefault();
        const user = {
            email: this.state.email,
            password : this.state.password
        }
        console.log(user);
        console.log(user.email);
        console.log(user.password);
        axios.post('http://localhost:3000/api/signup', {user}).then(res =>{
            alert("signUp successfull");
        });
        
    }

    render(){
        return(
            <div className="form-center">
            <form onSubmit={this.handleSubmit}>
            <div className="form-inner">
                <h2>Sign Up</h2>
                <div className="form-group">
                    <label>Email:
                        <input type="email" name="email" onChange={this.EmailChange}  value={this.email}/>
                    </label>
                </div>
                <div className="form-group">
                    <label>Password:
                        <input type="password" name="password" onChange={this.PasswordChange} value={this.password}/>
                    </label>
                </div>
                
                <button type="submit"><a href='/UserLogin'>LOGIN</a></button>
            </div>
            </form>
            </div>
        )
    }
}