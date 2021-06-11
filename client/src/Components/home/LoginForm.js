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

const LoginForm = ({ setUser, switchAnimation }) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const loginHandler = async (e) => {
        e.preventDefault();
        const body = {
            name: name,
            password: password,
        };

        const response = await axios.post("/users/login", body);
        console.log(response.config.data);
        console.log(JSON.parse(response.config.data).name);
        let authUser = JSON.parse(response.config.data).name;
        setUser(authUser);

        setName("");
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
                    type="password"
                    placeholder="Password.."
                    onChange={(e) => setPassword(e.target.value)}
                ></StyledInput>
                <StyledButton type="submit">Submit</StyledButton>
            </StyledForm>
            <MutedLink href="#">
                Don't have an account? <BoldText onClick={switchAnimation}>Sign-Up</BoldText>
            </MutedLink>
        </StyledFormContainer>
    );
};
export default LoginForm;
