import React from "react";
import {
    PageContainer,
    DashboardContainer,
    LeaderboardContainer,
    AnswerContainer,
    ContainerHeader,
    ButtonsQuiz,
    PlayerScoreContainer,
    PlayerScore,
    Navbar,
} from "../styles/globalStyles";
//images
import background from "../images/graphic.jpg";

export default function Dashboard({ user, setUser }) {
    const logoutHandler = () => {
        setUser("");
    };

    return (
        <PageContainer style={{ backgroundImage: `url(${background})` }}>
            <Navbar>
                <h1>QZapp</h1>
                <div className="user-details">
                    <h3>Hi, {user}</h3>
                    <h5 className="logout-btn" onClick={() => logoutHandler()}>
                        Logout
                    </h5>
                </div>
            </Navbar>
            <DashboardContainer>
                <ContainerHeader>Question: 1</ContainerHeader>
                <p>sample question here</p>
                <AnswerContainer>
                    <ButtonsQuiz>answer 1</ButtonsQuiz>
                    <ButtonsQuiz>answer 2</ButtonsQuiz>
                    <ButtonsQuiz>answer 3</ButtonsQuiz>
                    <ButtonsQuiz>answer 4</ButtonsQuiz>
                </AnswerContainer>
            </DashboardContainer>

            <LeaderboardContainer>
                <ContainerHeader>Leaderboard</ContainerHeader>
                <PlayerScoreContainer>
                    <PlayerScore>Player 1</PlayerScore>
                </PlayerScoreContainer>
            </LeaderboardContainer>
        </PageContainer>
    );
}
