import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Entry } from '../pages/Entry'

const Root = () => (
  <Router basename={window['__BASEPATH__']}>
    <Switch>
      <Route path='/' component={Entry} exact />
    </Switch>
  </Router>
)

export default Root
