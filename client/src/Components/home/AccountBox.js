import React, { useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { motion } from "framer-motion";

const StyledAccountBox = styled.div`
    width: 280px;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    border-radius: 18px;
    background-color: white;
    box-shadow: 0 5px 5px 5px rgba(254, 175, 179, 0.28);
    position: relative;
    overflow: hidden;
`;
const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 12px 5em 12px;
    .backdrop {
        width: 180%;
        height: 500px;
        position: absolute;
        top: -260px;
        left: -90px;
        display: flex;
        flex-direction: column;
        border-radius: 50%;
        background: rgb(2, 0, 36);
        background: rgb(5, 84, 84);
        background: linear-gradient(
            90deg,
            rgba(5, 84, 84, 1) 0%,
            rgba(4, 190, 190, 1) 71%,
            rgba(0, 255, 205, 0.819765406162465) 100%
        );
    }
`;
const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: white;
    z-index: 2;
    h2 {
        font-size: 30px;
        line-height: 1.3;
    }
    h5 {
        font-size: 13px;
        margin: 0;
        margin-top: 16px;
    }
`;
const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 12px;
`;
const backdropVarients = {
    expanded: {
        width: "240%",
        height: "1000px",
        borderRadius: "20%",
        transform: "rotate(60deg)",
    },
    collapsed: {
        width: "180%",
        height: "500px",
        borderRadius: "50%",
        transform: "rotate(60deg)",
    },
};
const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
};

export default function AccountBox({ setUser }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [active, setActive] = useState("signin");
    const playExpandAnimation = () => {
        setIsExpanded(true);
        setTimeout(() => {
            setIsExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    };
    const switchToSignup = () => {
        playExpandAnimation();
        setTimeout(() => {
            setActive("signup");
        }, 500);
    };
    const switchToSignin = () => {
        playExpandAnimation();
        setTimeout(() => {
            setActive("signin");
        }, 500);
    };

    return (
        <StyledAccountBox>
            <TopContainer>
                <motion.div
                    className="backdrop"
                    initial={false}
                    animate={isExpanded ? "expanded" : "collapsed"}
                    variants={backdropVarients}
                    transition={expandingTransition}
                ></motion.div>
                {active === "signin" && (
                    <HeaderContainer>
                        <h2>Welcome</h2>
                        <h2>Back</h2>
                        <h5>Login and start quizzing!</h5>
                    </HeaderContainer>
                )}
                {active === "signup" && (
                    <HeaderContainer>
                        <h2>Create</h2>
                        <h2>Account</h2>
                        <h5>Please sign-up to continue</h5>
                    </HeaderContainer>
                )}
            </TopContainer>
            <InnerContainer>
                {active === "signin" && (
                    <LoginForm switchAnimation={switchToSignup} setUser={setUser} />
                )}
                {active === "signup" && <SignUpForm switchAnimation={switchToSignin} />}
            </InnerContainer>
        </StyledAccountBox>
    );
}
