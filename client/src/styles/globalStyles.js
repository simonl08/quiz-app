import styled from "styled-components";

export const PageContainer = styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
form{
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

// ====================== Dashboard page ======================

//nav or banner placeholder
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
box-shadow: 0px 0px 5px #888888
`;

export const ContainerHeader = styled.h1`
background-color: #4f0a5e;
display: flex;
flex-direction: column;
justify-content: center;
flex-wrap: wrap;
text-align: center;
height: 40px;
width: 100%;
font-size: 1rem;
margin-top: 0;
border-radius: 20px;
`;

export const AnswerContainer = styled.div`
    width:100%;
    height:350px;
    display:grid;
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
    justify-content: center;
    margin-left: 20px;
    margin-top: 50px;
    border-radius: 20px;
    color: white;
    box-shadow: 0px 0px 5px #888888
`;


