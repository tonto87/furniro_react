import React, { useState } from "react";

const LoginPage = ({ onClick }) => {
    const [user, setUser] = useState({username: '', password: ''})

    const handleClick = (e) => {
        e.preventDefault()
        onClick(user)
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <><form onSubmit={handleClick}>
            <label>Username:<input type="text" name="username" onChange={handleChange} /></label>
            <label>Password:<input type="password" name="password" onChange={handleChange} /></label>
            <button type="submit" >Login</button>
        </form>
        </>
    );
};

export default LoginPage;