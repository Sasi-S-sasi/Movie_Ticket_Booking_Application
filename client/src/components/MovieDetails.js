import React from 'react';
import axios from 'axios';

export default class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            screen :'',
            name :'',
            mobile : '',
            seatNo : ''
        };
        this.ScreenChange = this.ScreenChange.bind(this);
        this.NameChange = this.NameChange.bind(this);
        this.MobileChange = this.MobileChange.bind(this);
        this.SeatNoChange = this.SeatNoChange.bind(this);
        
    }

    ScreenChange(event){
        this.setState({screen : event.target.value});
    }
    NameChange(event){
        this.setState({name : event.target.value});
    }
    MobileChange(event){
        this.setState({mobile : event.target.value});
    }
    SeatNoChange(event){
        this.setState({seatNo : event.target.value});
    }
    
    

    handleSubmit = event =>{
        event.preventDefault();
        const user = {
            screen: this.state.screen,
            name : this.state.name,
            mobile : this.state.mobile,
            seatNo : this.state.seatNo
        }
        console.log(user);
        axios.post('http://localhost:3000/api/userdetails/add', {user}).then(res =>{
            alert("booked successfull");
        });
        
    }

    render(){
        return(
            <div className="form-center">  
            <form onSubmit={this.handleSubmit}>
                        <div className="form-inner">          
                <div className="form-group">
                    <img src="data:image/jpeg;base64,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" alt="sultan"></img>
                    <figcaption>Screen 1</figcaption>

                    <br></br>
                    
                </div>
                  
                            <div className="form-group">
                                <select name="screen" id="screen" required onChange={this.ScreenChange} value={this.screen}>
                                    <option for="screen" value="screen 1" onChange={this.ScreenChange} value={this.screen}>screen 1</option>
                                    <option for="screen" value="screen 2" onChange={this.ScreenChange} value={this.screen}>screen 2</option>
                                </select>
                            </div>
                            <div>
                            <label>Name:
                                <input type="text" name="name" onChange={this.NameChange}  value={this.name}/>
                            </label>
                            </div>
                            <div>
                            <label>Mobile:
                                <input type="text" name="mobile" onChange={this.MobileChange}  value={this.mobile}/>
                            </label>
                            </div>
                            <div>
                            <label>Seat Number:
                                <input type="text" name="seatNo" onChange={this.SeatNoChange}  value={this.seatNo}/>
                            </label>
                            </div>
                            <button type="submit">BOOK</button>
                        </div>
                    </form>
             </div>
        )
    }
}

