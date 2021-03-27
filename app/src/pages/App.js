import { Header } from './header';
import { Movies } from './movies';
import { Footer } from './footer';
import { ErrorBoundary } from '@globalComponents';

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