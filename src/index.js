import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import store, { history } from './client/store'
import App from './client/app/index'

import 'sanitize.css/sanitize.css'
import './client/index.css'

const target = document.querySelector('#root')

const theme = createMuiTheme()

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <div>
          <App />
        </div>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  target
)
