import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components";
import Blogs from "./pages/blog";
import Contact from "./pages/contact";
import NoPage from "./pages/404";
import Hoa from "./pages/hoa";
import Detail from "./pages/detail";
import Register from "./pages/register";
import Login from "./pages/login";
import Cart from "./pages/cart";
import Loaihoa from "./pages/loaihoa";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="loaihoa" element={<Loaihoa />} />
                    <Route path="hoa">
                        <Route path=":maloai" element={<Hoa />} />
                    </Route>
                    <Route path="chitiet">
                        <Route path=":id" element={<Detail />} />
                    </Route>
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
