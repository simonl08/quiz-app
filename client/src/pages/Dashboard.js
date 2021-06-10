import React from 'react'
import {PageContainer, DashboardContainer, LeaderboardContainer, AnswerContainer, ContainerHeader, ButtonsQuiz, PlayerScoreContainer ,PlayerScore} from "../styles/globalStyles"

export default function Dashboard() {
    return (
        <PageContainer>
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
    )
}
