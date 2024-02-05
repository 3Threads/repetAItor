import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {TestLists} from "./pages/TestLists";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App bg-dark">
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage/>}/>
                    <Route path={'/tests'} element={<TestLists/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
