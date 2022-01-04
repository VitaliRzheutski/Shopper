// This file sets up React. You shouldn't need to edit it.
// (But if you really want to, no one's gonna stop you. ¯\_(ツ)_/¯)
import React from 'react'
import {render} from 'react-dom'
// import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
// import { withRouter} from 'react-router-dom'
import store from './store'
import Routes from './components/Routes'
import {Router} from 'react-router-dom'
// import { me } from './redux/user'
import history from './history'
render(
  <Provider store={store}>
    <Router history = {history}>
    <Routes />
    </Router>
  </Provider>,
  document.getElementById('main')
)
