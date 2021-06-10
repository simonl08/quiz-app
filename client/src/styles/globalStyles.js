import styled from "styled-components";

export const PageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    form {
        height: 50vh;
        width: 50vw;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: grey;
    }
`;

// ====================== Home page ======================
export const StyledFormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;
export const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const MutedLink = styled.a`
    font-size: 11px;
    color: rgba(200, 200, 200, 0.9);
    margin-top: 20px;
`;
export const BoldLink = styled.a`
    font-size: 12px;
    color: #ffd759;
`;
export const StyledInput = styled.input`
    width: 100%;
    height: 40px;
    outline: none;
    border: 1px solid rgba(200, 200, 200, 0.5);
    border-radius: 1px;
    padding: 0px 10px;
    border-bottom: 1.4px solid transparent;
    transition: all 250ms ease-in-out;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    &::placeholder {
        color: rgba(200, 200, 200, 1);
        font-family: "Poppins", sans-serif;
        font-weight: 200px;
        font-size: 12px;
    }
    &:last-of-type {
        border-bottom: 1.5px solid rgba(200, 200, 200, 0.3);
    }
    &:focus {
        outline: none;
        border-bottom: 3px solid rgb(255, 215, 89);
    }
`;
export const StyledButton = styled.button`
    width: 60%;
    outline: none;
    padding: 15px 0;
    margin-top: 20px;
    color: white;
    font-size: 14px;
    border: none;
    border-radius: 10px;
    transition: all 250ms ease-in-out;
    background: rgb(0, 105, 105);
    background: rgb(5, 84, 84);
    background: linear-gradient(
        90deg,
        rgba(5, 84, 84, 1) 0%,
        rgba(4, 190, 190, 1) 71%,
        rgba(0, 255, 205, 0.819765406162465) 100%
    );
    &:hover {
        filter: brightness(1.4);
    }
`;

// ====================== Dashboard page ======================

//nav placeholder
export const Navbar = styled.nav`
    background-color: purple;
    height: 60px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: absolute;
    top: 0;
    z-index: 999;
    color: white;
`;
export const DashboardContainer = styled.div`
    height: 80vh;
    width: 60vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 50px;
    color: white;
    background-color: purple;
    border-radius: 20px;
    box-shadow: 0px 0px 5px #888888;
`;
export const ContainerHeader = styled.h1`
    background-color: #4f0a5e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: 40px;
    width: 100%;
    font-size: 1rem;
    margin-top: 0;
    border-radius: 20px;
`;
export const AnswerContainer = styled.div`
    width: 100%;
    height: 350px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: plum;
`;
export const ButtonsQuiz = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 15px;
    text-align: center;
    border-radius: 15px;
    border-color: transparent;

    &:hover {
        background-color: yellow;
    }
`;
export const LeaderboardContainer = styled.div`
    height: 80vh;
    width: 30vw;
    background-color: purple;
    display: flex;
    flex-wrap: wrap;
    margin-left: 20px;
    margin-top: 50px;
    border-radius: 20px;
    color: white;
    box-shadow: 0px 0px 5px #888888;
`;
export const PlayerScoreContainer = styled.div`
    height: 85%;
    width: 100%;
    background-color: blue;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    border-radius: 20px;
    margin: 0 15px;
    margin-bottom: 10px;
    color: white;
`;
export const PlayerScore = styled.div`
    height: 20px;
    width: 90%;
    background-color: white;
    color: black;
    margin: 10px;
    border-radius: 20px;
    padding-left: 10px;
`;
