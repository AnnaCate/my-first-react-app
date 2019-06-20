import React from 'react'
import {render} from 'react-dom'

// create Pet component
const Pet = ({name, animal, breed}) => {
  // destructuring "props"
  return React.createElement('div', {}, [
    // create array of elements
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed)
  ])
}

// create App component
const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Henry',
      animal: 'Dog',
      breed: 'Weimaraner'
    }),
    React.createElement(Pet, {
      name: 'Bear',
      animal: 'Dog',
      breed: 'English Shepherd'
    }),
    React.createElement(Pet, {
      name: 'Piper Lou',
      animal: 'Dog',
      breed: 'English Shepherd'
    }),
    React.createElement(Pet, {
      name: 'Jack',
      animal: 'Dog',
      breed: 'Long-haired Dachshund'
    })
  ])
}

// render the App component to the DOM
render(React.createElement(App), document.getElementById('root'))
