import react from 'react';
import App from '../App';

function MainNavBar() {
    return (
        <div>
            <nav>
                <div className="logo">Movie Ticket Booking</div>
                <ul className="nav-links">
                    <li><a href='/MainNavBar'>Home</a></li>
                    <li><a href='/AdminLogin'>Admin</a></li>
                    <li><a href='/UserLogin'>User</a></li>
                    <li><a href='/SignUp'>Sign Up</a></li>
                    <li><a href = '/MainNavBar'>Logout</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default MainNavBar;