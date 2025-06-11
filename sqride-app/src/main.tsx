import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import { BrowserRouter } from 'react-router-dom';  // 🟢 Import BrowserRouter

const theme = createTheme({
  // Your theme customizations here
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter> {/* 🟢 Wrap App with BrowserRouter */}
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
