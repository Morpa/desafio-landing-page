import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import GlobalStyle from './styles/global'

import HomePage from 'pages/HomePage'

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <GlobalStyle />
    </Router>
  )
}

export default App
