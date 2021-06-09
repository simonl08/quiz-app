import React from 'react'
import {PageContainer, Navbar, DashboardContainer, LeaderboardContainer, AnswerContainer, ContainerHeader, ButtonsQuiz, Questions} from "../styles/globalStyles"

export default function Dashboard() {
    return (
        <PageContainer>
            <Navbar>Quiz</Navbar>
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
            </LeaderboardContainer>
        </PageContainer>
    )
}
