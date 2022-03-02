import { Link } from "react-router-dom";
import About from "../about/About";
import HeaderStyles from "./header.module.scss";

export default function Header() {
  return (
    <header>
      <h1 className="logo">Klay Clarke</h1>
      <nav>
        <ul className={HeaderStyles.navlinks}>
          <li>
            <Link to={<About />}>About</Link>
          </li>
          <li>Projects</li>
          <li>Work Experience</li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
