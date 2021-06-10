import React from "react";
//routes
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Dashboard from "./pages/Dashboard.js";
//styles
import { ThemeProvider } from "styled-components";
import { GenericStyle, theme } from "./styles/Theme";
//components
import Credit from "./Components/Credit";
import "./App.css";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GenericStyle />
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
                <Credit />
            </Router>
        </ThemeProvider>
    );
};

export default App;
