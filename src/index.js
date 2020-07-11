import {render} from 'react-dom';
import React,{lazy,Suspense} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';

const App = lazy(() => import('./App'));

const rootElement = document.getElementById('root');
const main = () => {
  render(
    <Suspense fallback={<div />}>
      <Router>
        <App />
      </Router>
    </Suspense>,
    rootElement
  )
}

main();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
