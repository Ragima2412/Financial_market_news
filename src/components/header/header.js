import './header.css';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div>
            <header>
                <NavLink className="headerLink_left" to='./detail_page'>SHARETRADE.<span className="headerLink_right">COM</span></NavLink>
            </header>
        </div >
    )
}
export default Header;
