import { Header } from './header';
import { Movies } from './movies';
import { Footer } from './footer';
import { ErrorBoundary } from '@globalComponents';
import { Provider } from 'react-redux';
import { useState } from 'react';
import { store } from '@store/store';

function App() {
    const [movieId, setMovieId] = useState(null);

    return (
        <ErrorBoundary>
            <Provider store={store}>
                <Header showSearchPanel={setMovieId} movieId={movieId} />
                <Movies showMovieDetails={setMovieId} />
                <Footer />
            </Provider>
        </ErrorBoundary>
    );
}

export { App }