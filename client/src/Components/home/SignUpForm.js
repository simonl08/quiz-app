import React, { useState } from "react";
import axios from "axios";
import {
    StyledFormContainer,
    StyledForm,
    MutedLink,
    BoldText,
    StyledInput,
    StyledButton,
} from "../../styles/globalStyles";

export default function SignUp({ switchAnimation }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signupHandler = async (e) => {
        e.preventDefault();
        console.log(name, email, password);
        const body = {
            name: name,
            email: email,
            password: password,
        };

        const response = await axios.post("/users/register", body);
        console.log(JSON.parse(response.config.data));

        setName("");
        setEmail("");
        setPassword("");
    };
    return (
        <StyledFormContainer>
            <StyledForm onSubmit={signupHandler}>
                <StyledInput
                    type="text"
                    placeholder="Username.."
                    onChange={(e) => setName(e.target.value)}
                ></StyledInput>
                <StyledInput
                    type="email"
                    placeholder="Email.."
                    onChange={(e) => setEmail(e.target.value)}
                ></StyledInput>
                <StyledInput
                    type="password"
                    placeholder="Password.."
                    onChange={(e) => setPassword(e.target.value)}
                ></StyledInput>
                <StyledButton type="submit">Submit</StyledButton>
            </StyledForm>
            <MutedLink href="#" onClick={switchAnimation}>
                Already have an account? <BoldText>Login</BoldText>
            </MutedLink>
        </StyledFormContainer>
    );
}
