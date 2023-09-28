import { Link } from "react-router-dom";
import { topNavigationItems } from "../routes/routes";
import "./NavigationBar.scss";
import "../App.scss";
import logo from '../assets/logo.jpg';

const NavigationBar = () => {
  return (
    <header className="navigation-header">
     <div className="nav-wrap main-container c-padding">
     <img src={logo} alt="logo" className="navigation-logo" />
      <nav>
        {topNavigationItems.map((navItem) => (
          <Link
            key={navItem.path}
            to={navItem.path}
            className="navigation-item"
          >
            {navItem.title}
          </Link>
        ))}
      </nav>
     </div>
    </header>
  );
};

export default NavigationBar;
