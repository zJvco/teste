import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './styles/App.css';

import Header from "./components/Header";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

import { UserProvider } from "./context/UserContext";

function App() {
    return (
        <UserProvider>
            <Router>
                <Header />
                <main>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/chat" element={<Chat />} />
                    </Routes>
                </main>
            </Router>
        </UserProvider>
    );
}

export default App;