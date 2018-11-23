import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { App } from './components'
import { configureStore } from './state'
import * as serviceWorker from './serviceWorker'

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
serviceWorker.register()
