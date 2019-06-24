import React, {useState, useEffect} from 'react'
import fetch from 'isomorphic-fetch'

// this is similar to an ajax request

const Cats = ({id}) => {
  const [cats, setCats] = useState([])
  const [renderStatus, setRenderStatus] = useState('loading')

  async function getCats() {
    fetch('http://localhost:5555/cats', {
      method: 'GET'
    })
      .then(res => res.json())
      .then(cats => {
        setCats(cats)
        setRenderStatus('ok')
      })
      .catch(err => {
        setCats([])
        setRenderStatus('error')
      })
  }

  useEffect(() => {
    getCats()
  }, [])

  let DisplayTheStuff = null

  if (renderStatus === 'ok') {
    DisplayTheStuff = (
      <div>
        {cats.map(cat => (
          <h2 key={cat.id}>{cat.name}</h2>
        ))}
      </div>
    )
  }
  return DisplayTheStuff
}

export default Cats
