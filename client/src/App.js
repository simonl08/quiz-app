import React, { useState } from "react";
//routes
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home.js";
import Dashboard from "./pages/Dashboard.js";
//styles
import { ThemeProvider } from "styled-components";
import { GenericStyle, theme } from "./styles/Theme";
//components
import Credit from "./Components/Credit";

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <ThemeProvider theme={theme}>
            <GenericStyle />
            <Router>
                {!user ? (
                    <Route exact path="/">
                        <Home user={user} setUser={setUser} />
                    </Route>
                ) : (
                    <Redirect to="/dashboard" />
                )}
                {user ? (
                    <Route path="/dashboard">
                        <Dashboard user={user} setUser={setUser} />
                    </Route>
                ) : (
                    <Redirect to="/" />
                )}
                <Credit />
            </Router>
        </ThemeProvider>
    );
};

export default App;
