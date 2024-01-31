import { Link } from "react-router-dom";

export default function Nav() {
    return (
    <nav className="navbar">
        <ul>
            <Link to="/">Homepage</Link>
            <Link to="/BookingPage">BookingPage</Link>
        </ul>
    </nav>
    )
}