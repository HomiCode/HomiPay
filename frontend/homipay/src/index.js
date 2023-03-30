import React from 'react';
import { createRoot } from 'react-dom/client'; // <-- Update import statement
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const rootElement = document.getElementById('root');

createRoot(rootElement).render( // <-- Update method call
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
