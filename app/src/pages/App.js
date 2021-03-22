import { Header } from './header';
import { Movies } from './movies';
import { Footer } from './footer';
import { ErrorBoundary } from '@globalComponents';
import { useState } from 'react';

function App() {
    const [movieId, setMovieId] = useState(null);

    return (
        <ErrorBoundary>
            <Header showSearchPanel={setMovieId} movieId={movieId} />
            <Movies showMovieDetails={setMovieId} />
            <Footer />
        </ErrorBoundary>
    );
}

export { App }