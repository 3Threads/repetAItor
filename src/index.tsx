import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@mantine/core/styles.css';
import {MantineProvider, createTheme} from "@mantine/core";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const theme = createTheme({
    /** Put your mantine theme override here */
});


root.render(
    <MantineProvider theme={theme}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </MantineProvider>
);

