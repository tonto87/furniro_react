import React, { useState } from "react";

const RegisterPage = ({ onClick }) => {
    const [newUser, setNewUser] = useState({username: '', email: '', password: ''})
    const id = Date.now();

    const handleClick = (e) => {
        e.preventDefault()
        onClick(newUser)
    }

    const handleChange = (e) => {
        setNewUser({ ...newUser, id, [e.target.name]: e.target.value })
    }

    return (
        <>
            <form onSubmit={handleClick}>
                <label>Username:<input type="text" name="username" onChange={handleChange} /></label>
                <label>Email:<input type="text" name="email" onChange={handleChange} /></label>
                <label>Password:<input type="password" name="password" onChange={handleChange} /></label>
                <button type="submit"  >Register</button>
            </form>
        </>
    )
}

export default RegisterPage;