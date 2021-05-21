import "./styles/reset.css";
import ReactDOM from 'react-dom'
import { App } from './pages/App';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './modules/configureStore';

const store = configureStore(window.PRELOADED_STATE);

ReactDOM.hydrate(
    <BrowserRouter>
        <App store={store} />
    </BrowserRouter>,
    document.getElementById('app')
);