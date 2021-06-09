import React, { useState, useEffect} from "react";
import axios from "axios";
import {PageContainer} from "../styles/globalStyles"

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = async (e) => {
        e.preventDefault()
        const body = {
            name: name,
            email: email,
            password: password}

        await axios.post('/users/login', body);

        setName("")
        setEmail("")
        setPassword("")
    }

    return (
        <PageContainer>
            <form onSubmit={loginHandler}>
                <label className="labels">Username</label>
                    <input type="text"value={name} onChange={(e) => setName(e.target.value)}/>
                <label className="labels">Email</label>
                    <input type="text"value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label className="labels">Password</label>
                    <input type="text"value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Login</button>
            </form>
        </PageContainer>
    )
}

export default Login;
