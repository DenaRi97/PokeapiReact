import React from "react";
import "./styles.css";
import Navbar from "../components/navbar";

export default function App() {
    return (
        <div>
            <Navbar />
            <div className="App">
                <Search />
            </div>
        </div>
    );
}