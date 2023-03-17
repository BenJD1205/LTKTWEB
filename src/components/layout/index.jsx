import { Outlet, Link } from "react-router-dom";
import Home from '../../pages/home';
import './layout.scss';

const Layout = () => {
  return (
    <div className="layout">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Home />
        <Outlet />
      </div>
    </div>
  )
};

export default Layout;