import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

const StyledIntro = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background-color: ${(props) => props.theme.teal};
    .icons {
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    i {
        position: absolute;
        opacity: 0;
        z-index: 100;
        font-size: 20px;
        color: white;
    }
    h1 {
        opacity: 0;
        color: white;
    }
`;

export default function Intro() {
    let container = useRef(null);
    let icon1 = useRef(null);
    let icon2 = useRef(null);
    let icon3 = useRef(null);
    let icon4 = useRef(null);
    let icon5 = useRef(null);
    let icon6 = useRef(null);
    let icon7 = useRef(null);
    let icon8 = useRef(null);
    let icon9 = useRef(null);
    let logo = useRef(null);
    let tl = gsap.timeline();

    useEffect(() => {
        tl.to(icon1, { opacity: 1, fontSize: 100, duration: 0.2, delay: 0.5 })
            .to(icon1, { opacity: 0, fontSize: 50, duration: 0.2, delay: 0.1 })
            .to(icon2, { opacity: 1, fontSize: 100, duration: 0.2 })
            .to(icon2, { opacity: 0, fontSize: 50, duration: 0.2, delay: 0.1 })
            .to(icon3, { opacity: 1, fontSize: 100, duration: 0.2 })
            .to(icon3, { opacity: 0, fontSize: 50, duration: 0.2, delay: 0.1 })
            .to(icon4, { opacity: 1, fontSize: 100, duration: 0.2 })
            .to(icon4, { opacity: 0, fontSize: 50, duration: 0.2, delay: 0.1 })
            .to(icon5, { opacity: 1, fontSize: 100, duration: 0.2 })
            .to(icon5, { opacity: 0, fontSize: 50, duration: 0.2, delay: 0.1 })
            .to(icon6, { opacity: 1, fontSize: 100, duration: 0.2 })
            .to(icon6, { opacity: 0, fontSize: 50, duration: 0.2, delay: 0.1 })
            .to(icon7, { opacity: 1, fontSize: 100, duration: 0.2 })
            .to(icon7, { opacity: 0, fontSize: 50, duration: 0.2, delay: 0.1 })
            .to(icon8, { opacity: 1, fontSize: 100, duration: 0.2 })
            .to(icon8, { opacity: 0, fontSize: 50, duration: 0.2, delay: 0.1 })
            .to(icon9, { opacity: 1, fontSize: 100, duration: 0.2 })
            .to(icon9, { opacity: 0, fontSize: 50, duration: 0.2, delay: 0.1 })
            .to(logo, { opacity: 1, fontSize: 60, duration: 0.2 })
            .to(container, { top: "-100vh", duration: 2, ease: "expo.inOut", delay: 1 });
    });

    return (
        <StyledIntro ref={(el) => (container = el)}>
            <div className="icons">
                <i className="fas fa-volleyball-ball" ref={(el) => (icon1 = el)}></i>
                <i className="fas fa-film" ref={(el) => (icon2 = el)}></i>
                <i className="fas fa-book" ref={(el) => (icon3 = el)}></i>
                <i className="fas fa-microscope" ref={(el) => (icon4 = el)}></i>
                <i className="fas fa-globe-americas" ref={(el) => (icon5 = el)}></i>
                <i className="fas fa-tv" ref={(el) => (icon6 = el)}></i>
                <i className="fas fa-hippo" ref={(el) => (icon7 = el)}></i>
                <i className="fas fa-square-root-alt" ref={(el) => (icon8 = el)}></i>
                <i className="fas fa-palette" ref={(el) => (icon9 = el)}></i>
                <h1 ref={(el) => (logo = el)}>QZapp</h1>
            </div>
        </StyledIntro>
    );
}
