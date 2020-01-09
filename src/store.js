import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

const configureStore = () => {
    const preloadedState = window.__PRELOADED_STATE__;
    delete window.__PRELOADED_STATE__;
    const store = createStore(
        reducer,
        applyMiddleware(thunk)
        || preloadedState
    );

    window.snapSaveState = () => ({
        __PRELOADED_STATE__: store.getState()
    });

    return store;
}

export default configureStore;