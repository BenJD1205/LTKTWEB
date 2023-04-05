<<<<<<< HEAD
import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login
=======
import React, { useState } from "react";
import config from "../../config/config";

const Login = () => {
    const [tendangnhap, setTenDangNhap] = useState("");
    const [matkhau, setMatKhau] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`${config.backendPort}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ tendangnhap, matkhau }),
        })
            .then((res) => res.json())
            .then((user) => {
                console.log(user[0]);
                const data = user[0];
                localStorage.setItem("user", JSON.stringify(data));
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="register">
            <span className="title">Đăng Nhập</span>
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <label>Tên đăng nhập</label>
                    <input
                        value={tendangnhap}
                        onChange={(e) => setTenDangNhap(e.target.value)}
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
                <button type="submit">Đăng nhập</button>
            </form>
        </div>
    );
};

export default Login;
>>>>>>> 31d6265acccc9ae900b7692712bc445f4b0030bb
