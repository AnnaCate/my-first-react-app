import React from 'react'
import {render} from 'react-dom'
import Pet from './Pet'
import SearchParam from './SearchParam'
import {Router} from '@reach/router'
import Details from './Details'

// create App component using JSX
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Router>
        <SearchParam path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  )
}

// render the App component to the DOM
render(React.createElement(App), document.getElementById('root'))
