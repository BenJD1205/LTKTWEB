import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import './hoa.scss'

const Hoa = () => {
  let { maloai } = useParams();

  const [hoas, setHoas] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5001/api/hoa/${maloai}`)
      .then((res) => res.json())
      .then((result) => setHoas(result))
      .catch((err) => console.log(err))
  }, [maloai]);

  return (
    <div className='hoa'>
      {hoas.map((item,idx) => (
        <div key={idx} className='card'>
          <img src={'http://localhost:5001/images/'+item.hinh} />
          <Link to={`/chitiet/${item._id}`}>{item.tenhoa}</Link>
          <span>Đơn giá: {item.dongia} VNĐ</span>
          <button>Đặt mua</button>
        </div>
      ))}
    </div>
  )
}

export default Hoa