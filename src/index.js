import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';



import App from './App';

export const primaryColour = '#3B5437'; //Green
export const lightColour = '#6DA043';  //Light Green
export const secondaryColour = '#FFFFFF';
export const lastColour = '#1980AB';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3B5437',
    },
    secondary: {
      main: '#FFFFFF',
    },
    info: {
      main: '#F7C873',
    },
    text:{
      disabled: '#000000',
    },
    error:{
      main: '#c71e1e',
    },
    warning:{
      main: '#ff8c00'
    },
    success:{
      main: '#32cd32'
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

