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

export default function SignUp(props) {
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

        await axios.post("/users/register", body);

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
            </StyledForm>
            <StyledButton type="submit">Submit</StyledButton>
            <MutedLink href="#">
                Already have an account?{" "}
                <BoldLink href="#" onClick={props.switch}>
                    Login
                </BoldLink>
            </MutedLink>
        </StyledFormContainer>
    );
}
