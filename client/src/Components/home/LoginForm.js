import React, { useState } from "react";
import axios from "axios";
import {
    StyledFormContainer,
    StyledForm,
    MutedLink,
    BoldLink,
    StyledInput,
    StyledButton,
} from "../../styles/globalStyles";

export default function LoginForm(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = async (e) => {
        e.preventDefault();
        const body = {
            name: name,
            email: email,
            password: password,
        };

        await axios.post("/users/login", body);

        setName("");
        setEmail("");
        setPassword("");
    };

    return (
        <StyledFormContainer>
            <StyledForm onSubmit={loginHandler}>
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
                {/* <MutedLink href="#">Forgot password?</MutedLink> */}
            </StyledForm>
            <StyledButton type="submit">Submit</StyledButton>
            <MutedLink href="#">
                Don't have an account? <BoldLink onClick={props.switch}>Sign-Up</BoldLink>
            </MutedLink>
        </StyledFormContainer>
    );
}
