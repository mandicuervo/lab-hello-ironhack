import './Navbar.css';
import logo from '../../images/ironhack-logo.svg';
import hamburguer from '../../images/menu-top.svg'

function Navbar() {
    return ( 
        <div className='Navbar'>
            <img src={ logo } alt='logo' width='40px'/>
            <img src={ hamburguer } alt='menu' width='40px'/>
        </div>
     );
}

export default Navbar;