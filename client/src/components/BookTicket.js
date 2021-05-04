import React from 'react';
import axios from 'axios';

export default class BookTicket extends React.Component{
    constructor(){
        super()
        this.state={
            name: '',
            mobile:'',
            seatNumber:''
        };
        this.NameChange = this.NameChange.bind(this);
        this.MobileChange = this.MobileChange.bind(this);
        this.seatNumberChange = this.seatNumberChange.bind(this);
    }

    NameChange(event){
        this.setState({name : event.target.value});
    }
    MobileChange(event){
        this.setState({mobile: event.target.value});
    }
    seatNumberChange(event){
        this.setState({seatNumber : event.target.value});
    }

    handleSubmit = event =>{
        event.preventDefault();
        const user = {
            name: this.state.name,
            mobile : this.state.mobile,
            seatNumber : this.state.seatNumber
        }
        console.log(user);
        axios.post('http://localhost:3000/api/userDetails.add', {user}).then(res =>{
            alert('Your Ticket is booked successfully')
            console.log(res.data);
        });
        
    }

    render(){
        return(
            <div className="form-center">
            <form onSubmit={this.handleSubmit}>
            <div className="form-inner">
                <div className="form-group">
                    <label>Name:
                        <input type="text" name="name" onChange={this.NameChange}  value={this.name}/>
                    </label>
                </div>
                <div className="form-group">
                    <label>Mobile:
                        <input type="text" name="mobile" onChange={this.MobileChange} value={this.mobile}/>
                    </label>
                </div>
                <div className="form-group">
                    <label>SeatNumber:
                        <input type="text" name="SeatNumber" onChange={this.seatNumberChange} value={this.seatNumber}/>
                    </label>
                </div>
                <button type="submit">LOGIN</button>
            </div>
            </form>
            </div>
        )
    }
}