import {Link} from 'react-router-dom';
import '../styles/navbar.css';

function Navbar(){

    return(
        <nav>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/About">ABOUT</Link></li>
                <li><Link to="/Contact">CONTACT</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;