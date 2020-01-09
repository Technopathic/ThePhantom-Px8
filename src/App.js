import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './store';

const Home = React.lazy(() => import('./containers/Home'));
const store = configureStore();


class App extends React.PureComponent {
  
  render() {
    return(
      <Provider store={store}>
        <React.Suspense fallback={`<div></div>`}>
          <Home />
        </React.Suspense>
      </Provider>
    )
  }
}

export default App;
