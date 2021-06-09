import {PageContainer} from "../styles/globalStyles"
import React, { useState, useEffect} from "react";
import axios from "axios";

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerHandler = async (e) => {
        e.preventDefault()
        console.log(name, email, password)
        const body = {
            name: name,
            email: email,
            password: password}

        await axios.post('/users/register', body);
        
        setName("")
        setEmail("")
        setPassword("")
    }

    return (
        <PageContainer>
            <form onSubmit={registerHandler}>
                <label className="labels">Username</label>
                    <input type="text"value={name} onChange={(e) => setName(e.target.value)}/>
                <label className="labels">Email</label>
                    <input type="text"value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label className="labels">Password</label>
                    <input type="text"value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Register</button>
            </form>
        </PageContainer>
    )
}

export default Register;