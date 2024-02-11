// App.tsx
import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {TestLists} from "./pages/TestLists";
import 'bootstrap/dist/css/bootstrap.min.css';
import TasksPage from "./pages/TasksPage";
import { UserProvider } from './UserContext'; // Import UserProvider

function App() {
    return (
        <UserProvider> {/* Wrap your app with UserProvider */}
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route index element={<HomePage/>}/>
                        <Route path={'/tests/:subject'} element={<TestLists/>}/>
                        <Route path={'/tests/:subject/:year/:variant'} element={<TasksPage/>}/>
                        <Route path={'*'} element={<h1>404 Not Found</h1>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </UserProvider>
    );
}

export default App;
