import React, { useState } from "react";
import "./register.scss";

const Register = () => {
    const [email, setEmail] = useState("");
    const [tennguoidung, setTenNguoiDung] = useState("");
    const [tendangnhap, setTenDangNhap] = useState("");
    const [matkhau, setMatKhau] = useState("");
    const [sodienthoai, setSoDienThoai] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="register">
            <span className="title">Đăng Ký </span>
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label>Tên người dùng</label>
                    <input
                        value={tennguoidung}
                        onChange={(e) => setTenNguoiDung(e.target.value)}
                        type="text"
                    />
                </div>
                <div className="input">
                    <label>Tên đăng nhập</label>
                    <input
                        value={tendangnhap}
                        onChange={(e) => setTenDangNhap(e.target.value)}
                        type="text"
                    />
                </div>
                <div className="input">
                    <label>Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                    />
                </div>
                <div className="input">
                    <label>Mật khẩu</label>
                    <input
                        value={matkhau}
                        onChange={(e) => setMatKhau(e.target.value)}
                        type="password"
                    />
                </div>
                <div className="input">
                    <label>Số điện thoại</label>
                    <input
                        value={sodienthoai}
                        onChange={(e) => setSoDienThoai(e.target.value)}
                        type="text"
                    />
                </div>
                <button type="submit">Đăng ký</button>
            </form>
        </div>
    );
};

export default Register;
