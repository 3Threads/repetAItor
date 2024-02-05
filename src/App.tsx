import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {TestLists} from "./pages/TestLists";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage/>}/>
                    <Route path={'/tests'}>
                        <Route path={':subject'} element={<TestLists/>}/>
                    </Route>
                    <Route path={'*'} element={<h1>404 Not Found</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
