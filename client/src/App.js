import react, {useState} from'react';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import MainNavBar from './components/MainNavBar';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import SignUp from './components/SignUp';
import MovieDetails from './components/MovieDetails';
import BookTicket from './components/BookTicket';

const App = () =>{
  
  return (
    <div className="App">
      <MainNavBar/>
        <Router>
          <Route path='/AdminLogin' exact component={AdminLogin}/>
          <Route path = '/UserLogin' exact component={UserLogin}/>
          <Route path='/SignUp' exact component={SignUp}/>
          <Route path='/MovieDetails' exact component={MovieDetails}/>
          <Route path='/BookTicket' exact component={BookTicket}/>
        </Router> 
    </div>
  );
}

export default App;
