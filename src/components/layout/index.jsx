import { Outlet, Link } from "react-router-dom";
import Home from "../../pages/home";
import { HiShoppingCart } from "react-icons/hi";
import "./layout.scss";

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
                    <li>
                        <Link to="/register">Đăng Ký</Link>
                    </li>
                    <li>
                        <Link to="/login">Đăng nhập</Link>
                    </li>
                </ul>
                <div>
                    <Link to="/cart">
                        <HiShoppingCart size={20} />
                    </Link>
                </div>
            </nav>
            <div className="content">
                <Home />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
