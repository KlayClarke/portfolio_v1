import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <div className="left">
        <h1>Clarke, Klay</h1>
      </div>
      <div className="right">
        <ul className="nav-links">
          <li>
            <Link to={"/"}>
              <h2>home</h2>
            </Link>
          </li>
          <li>
            <Link to={"/about"}>
              <h2>about</h2>
            </Link>
          </li>
          <li>
            <Link to={"/next"}>
              <h2>next</h2>
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>
              <h2>contact</h2>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
