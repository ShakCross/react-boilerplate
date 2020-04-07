import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App.jsx';
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles, ThemeStyles } from 'styles.js'


ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={ThemeStyles}>
            <GlobalStyles/>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)