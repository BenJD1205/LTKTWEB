import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./hoa.scss";

const Hoa = () => {
    let { maloai } = useParams();

    const [hoas, setHoas] = useState([]);
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        fetch(`http://localhost:5001/api/hoa/${maloai}`)
            .then((res) => res.json())
            .then((result) => setHoas(result))
            .catch((err) => console.log(err));
    }, [maloai]);

    useEffect(() => {
        if (search.length > 0) {
            fetch(`http://localhost:5001/api/hoa/tenhoa/${search}`)
                .then((res) => res.json())
                .then((result) => setHoas(result))
                .catch((err) => console.log(err));
        }
    }, [search]);

    return (
        <div>
            <div className="search">
                <input value={search} name="search" onChange={handleSearch} />
            </div>
            <div className="hoa">
                {hoas.map((item, idx) => (
                    <div key={idx} className="card">
                        <img
                            src={"http://localhost:5001/images/" + item.hinh}
                        />
                        <Link to={`/chitiet/${item._id}`}>{item.tenhoa}</Link>
                        <span>Đơn giá: {item.dongia} VNĐ</span>
                        <button>Đặt mua</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hoa;
