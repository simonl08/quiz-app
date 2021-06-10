import React from "react";
import styled from "styled-components";

const StyledCredit = styled.div`
    position: fixed;
    right: 25px;
    bottom: 25px;
    cursor: pointer;
    i {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-size: 20px;
        transition: all 500ms;
        color: pink;
        a {
            position: absolute;
            display: none;
            font-size: 8px;
            color: grey;
            width: 100px;
            bottom: 20px;
        }
    }
    i:hover a {
        display: block;
    }
`;

export default function Credit() {
    return (
        <StyledCredit>
            <i className="fas fa-info-circle">
                <a href="https://www.freepik.com/vectors/background">
                    Background vector created by rawpixel.com
                </a>
            </i>
        </StyledCredit>
    );
}
