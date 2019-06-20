import React from 'react'
import {render} from 'react-dom'
import Pet from './Pet'
import SearchParam from './SearchParam'

// create App component using React.createElement 💩
// const App = () => {
//   return React.createElement('div', {}, [
//     React.createElement('h1', {}, 'Adopt Me!'),
//     React.createElement(Pet, {
//       name: 'Henry',
//       animal: 'Dog',
//       breed: 'Weimaraner'
//     }),
//     React.createElement(Pet, {
//       name: 'Bear',
//       animal: 'Dog',
//       breed: 'English Shepherd'
//     }),
//     React.createElement(Pet, {
//       name: 'Piper Lou',
//       animal: 'Dog',
//       breed: 'English Shepherd'
//     }),
//     React.createElement(Pet, {
//       name: 'Jack',
//       animal: 'Dog',
//       breed: 'Long-haired Dachshund'
//     })
//   ])
// }

// create App component using JSX 💯
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Henry" animal="Dog" breed="Weimaraner" />
      <Pet name="Bear" animal="Dog" breed="English Shepherd" />
      <Pet name="Piper Lou" animal="Dog" breed="English Shepherd" />
      <Pet name="Jack" animal="Dog" breed="Dachshund" />
      <SearchParam />
    </div>
  )
}

// render the App component to the DOM
render(React.createElement(App), document.getElementById('root'))
