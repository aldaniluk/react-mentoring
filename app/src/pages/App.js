import { Header, MovieHeader } from './header';
import { Movies } from './movies';
import { Footer } from './footer';
import { Page404 } from './404';
import { ErrorBoundary } from '@globalComponents';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <ErrorBoundary>
                <Provider store={store}>
                    <Switch>
                        <Route path='/film/:movieId'>
                            <MovieHeader />
                            <Movies />
                        </Route>
                        <Route exact path='/film'>
                            <Header />
                            <Movies />
                        </Route>
                        <Route exact path='/'>
                            <Header />
                            <Movies />
                        </Route>
                        <Route path='*'>
                            <Page404 />
                        </Route>
                    </Switch>
                    <Footer />
                </Provider>
            </ErrorBoundary>
        </Router>
    );
}

export { App }