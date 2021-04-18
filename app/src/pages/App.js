import { Header } from './header';
import { Movies } from './movies';
import { Footer } from './footer';
import { useState } from 'react';
import { AppContainer } from './components/AppContainer';

function App() {
    const [movieId, setMovieId] = useState(null);

    return (
        <AppContainer>
            <Header showSearchPanel={setMovieId} movieId={movieId} />
            <Movies showMovieDetails={setMovieId} />
            <Footer />
        </AppContainer>
    );
}

export { App }