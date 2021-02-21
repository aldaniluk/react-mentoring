import React from 'react';
import { Header } from './header/Header';
import { Movies } from './movies/Movies';
import { Footer } from './footer/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';

function App(){
    return (
        <ErrorBoundary>
            <Header />
            <Movies />
            <Footer />
        </ErrorBoundary>
    );
}

export { App }