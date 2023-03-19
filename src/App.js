import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Layout } from './components';
import Home from './pages/home';
import Blogs from './pages/blog';
import Contact from './pages/contact';
import NoPage from './pages/404';
import Loaihoa from './pages/loaihoa';
import Hoa from './pages/hoa';
import Detail from './pages/detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path='hoa'>
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
