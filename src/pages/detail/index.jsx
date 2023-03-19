import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import './detail.scss'

const Detail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({})

  useEffect(() => {
    fetch(`http://localhost:5001/api/hoa/mahoa/${id}`)
      .then((res) => res.json())
      .then((result) => setItem(result))
      .catch((err) => console.log(err))
  }, [id]);

  return (
    <div className='detail'>
      <img src={'http://localhost:5001/images/'+item.hinh} alt="" />
      <div className='info'>
        <span>{item.tenhoa}</span>
        <span>{item.mota}</span>
        <span>{item.dongia} VNĐ</span>
        <div className='btn'>
          <button className='add'>Bỏ vào giỏ hàng</button>
          <button className='buy'>Mua</button>
        </div>
      </div>
    </div>
  )
}

export default Detail