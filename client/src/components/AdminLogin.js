import react, {useState} from 'react';
import { Link } from 'react-router-dom';
import App from '../App';

function AdminLogin({Login, error}){
    const [details,setDetails] = useState({name: "", email: "", password:""});

    

    const submitHandler = e =>{
        e.preventDefault();

        if(details.email === "admin@gmail.com" && details.password === "admin123"){
            console.log("Logged in");
          }
          else{
            alert("Incorrect email or password");
            
          }

        
    }

    return(
        <div>
            <div id="AdminLoginForm" className="form-center">
              <form onSubmit={submitHandler}>
                  <div className="form-inner">
                      <h2>Admin Login</h2>
                      {(error !== "") ? (<div className="error">{error}</div>) : ""}
                      <div className="form-group">
                          <label htmlFor="email">Email : </label>
                          <input type="email" name="email" id="email" onChange={e => setDetails({...details, email : e.target.value})} value={details.email}/>
                      </div>
                      <div className="form-group">
                          <label htmlFor="password">Password : </label>
                          <input type="password" name="password" id="password" onChange={e => setDetails({...details, password : e.target.value})} value={details.password}/>
                      </div>
                      <button type="submit"><Link to="/">SUBMIT</Link></button>
                  </div>
              </form>
            </div>
        </div>
    )
}

export default AdminLogin;
