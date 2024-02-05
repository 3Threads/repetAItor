import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {TestLists} from "./pages/TestLists";
import 'bootstrap/dist/css/bootstrap.min.css';
import TestPage from "./pages/TestPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage/>}/>
                    <Route path={'/tests/:subject'} element={<TestLists/>}/>
                    <Route path={'/tests/:subject/:year/:variant'} element={<TestPage/>}/>
                    <Route path={'*'} element={<h1>404 Not Found</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
