import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './home.scss'

const Home = () => {
  const [loaihoas, setLoaihoas] = useState([]);
  const [itemActive, setItemActive] = useState(0)

  useEffect(() => {
    fetch('http://localhost:5001/api/loaihoa')
      .then((res) => res.json())
      .then((result) => setLoaihoas(result))
      .catch((err) => console.log(err))
  }, []);

  return (
    <div className='home'>
      {loaihoas.map((item) => (
        <Link onClick={() => setItemActive(item.maloai)} to={`/hoa/${item.maloai}`} key={item.maloai}>
          <span className={`${itemActive === item.maloai ? 'active' : ''}`}> {item.tenloai}</span>
        </Link>
      ))}
    </div>
  )
}

export default Home