import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
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
        <div key={idx} className='content'>
          <span>{item.tenhoa}</span>
          <img src={'http://localhost:5001/images/'+item.hinh} />
        </div>
      ))}
    </div>
  )
}

export default Hoa