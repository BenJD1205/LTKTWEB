import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Loaihoa = () => {

  const [loaihoas, setLoaihoas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/loaihoa')
      .then((res) => res.json())
      .then((result) => setLoaihoas(result))
      .catch((err) => console.log(err))
  }, []);

  return (
    <div>
      {loaihoas.map((item) => (
        <Link to={`/hoa/${item.maloai}`} key={item.maloai}>
          <span> {item.tenloai}</span>
        </Link>
      ))}
    </div>
  )
}

export default Loaihoa