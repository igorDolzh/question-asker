import { createElement as h } from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { store } from './stores/main'
import { Provider as ReduxProvider } from 'react-redux'
import Root from './config/Root'



const root = document.getElementById('app')
const renderApp = (Component) => render(
  h(AppContainer, {},
    h(ReduxProvider, { store: store },
      h(Component)
    )
  ),
  root)

renderApp(Root)


if (module.hot) {
  module.hot.accept('./config/Root', () => {
    let NewMain = require('./config/Root').default // eslint-disable-line
    renderApp(NewMain)
  })
}
