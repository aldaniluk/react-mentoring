import { Header, MovieHeader } from './../header';
import { Movies } from './../movies';
import { Footer } from './../footer';
import { Page404 } from './../404';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function NavigationMap() {
    return (
        <Router>
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
        </Router>
    )
}

export { NavigationMap }
