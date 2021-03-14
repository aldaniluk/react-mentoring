import { Header } from './header';
import { Movies } from './movies';
import { Footer } from './footer';
import { ErrorBoundary } from '@globalComponents';
import React from 'react';

class App extends React.Component {
    state = {
        searchPanelShown: false,
        movieId: null
    }

    showMovieDetails = id => {
        this.setState({
            searchPanelShown: false,
            movieId: id
        })
    }

    showSearchPanel = () => {
        this.setState({
            searchPanelShown: true,
            movieId: null
        })
    }

    render() {
        return (
            <ErrorBoundary>
                <Header showSearchPanel={this.showSearchPanel} searchPanelShown={this.state.searchPanelShown} movieId={this.state.movieId} />
                <Movies showMovieDetails={this.showMovieDetails} />
                <Footer />
            </ErrorBoundary>
        );
    }
}

export { App }