import { ErrorBoundary } from '@globalComponents';
import { Provider } from 'react-redux';
import { store } from '@store/store';

function AppContainer(props) {
    return (
        <ErrorBoundary>
            <Provider store={store}>
                {props.children}
            </Provider>
        </ErrorBoundary>
    );
}

export { AppContainer }