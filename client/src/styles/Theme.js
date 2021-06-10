import { createGlobalStyle } from "styled-components";

export const theme = {
    teal: "#059999",
    pink: "#FED4D6",
    gold: "#FFD759",
};

export const GenericStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    overscroll-behavior-y: none;
    font-family: 'Poppins', sans-serif;
}
a, button{
    outline: none;
    text-decoration: none;
    cursor: pointer;
}
h1,h2,h3{
    font-family: "Potta One", cursive;
}

`;
