import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <nav>
            <Link to='/' style={{marginRight: '10px'}}> Home </Link>
            <Link to='/Products' style={{marginRight: '10px'}}> Products </Link>
            <Link to='/Cart' style={{marginRight: '10px'}}> Cart </Link>
            <Link to='/Contact' style={{marginRight: '10px'}}> Contact </Link>
        </nav>
    )
}
export default Navbar;