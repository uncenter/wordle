import { useState, useEffect } from "react";
import "./App.css";
import Toolbar from './components/Toolbar';
import HelpModal from './components/HelpModal';

function App() {
    return (
        <div className="App">
            <Toolbar />
            <div className="grid">
                <div className="grid-row row-1">
                    <div className="grid-item item-1"></div>
                    <div className="grid-item item-2"></div>
                    <div className="grid-item item-3"></div>
                    <div className="grid-item item-4"></div>
                    <div className="grid-item item-5"></div>
                </div>
                <div className="grid-row row-2">
                    <div className="grid-item item-1"></div>
                    <div className="grid-item item-2"></div>
                    <div className="grid-item item-3"></div>
                    <div className="grid-item item-4"></div>
                    <div className="grid-item item-5"></div>
                </div>
                <div className="grid-row row-3">
                    <div className="grid-item item-1"></div>
                    <div className="grid-item item-2"></div>
                    <div className="grid-item item-3"></div>
                    <div className="grid-item item-4"></div>
                    <div className="grid-item item-5"></div>
                </div>
                <div className="grid-row row-4">
                    <div className="grid-item item-1"></div>
                    <div className="grid-item item-2"></div>
                    <div className="grid-item item-3"></div>
                    <div className="grid-item item-4"></div>
                    <div className="grid-item item-5"></div>
                </div>
                <div className="grid-row row-5">
                    <div className="grid-item item-1"></div>
                    <div className="grid-item item-2"></div>
                    <div className="grid-item item-3"></div>
                    <div className="grid-item item-4"></div>
                    <div className="grid-item item-5"></div>
                </div>
            </div>
        </div>
    );
}

export default App;
