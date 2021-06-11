import React from "react";
import styled from "styled-components";
//components
import Intro from "../Components/home/Intro";
import AccountBox from "../Components/home/AccountBox";
//images
import background from "../images/graphic.jpg";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
`;

export default function Home({ setUser }) {
    return (
        <>
            <Intro />
            <Container style={{ backgroundImage: `url(${background})` }}>
                <AccountBox setUser={setUser} />
            </Container>
        </>
    );
}
