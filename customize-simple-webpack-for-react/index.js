import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';

const Loading = () => <p>loading..</p>

const LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: 'async' */'./Async.jsx'),
  loading: Loading
})

ReactDOM.render(
  <LoadableComponent />,
  document.getElementById('root')
)
