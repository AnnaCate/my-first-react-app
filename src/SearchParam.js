import React, {useState, useEffect} from 'react'
import pet, {ANIMALS} from '@frontendmasters/pet'

const SearchParams = () => {
  // setting states
  // location is destructured useState array (hook)
  // useState returns an array, with the first item being the value of state
  // and the seoncd item being a function to change the value of state
  const [location, setLocation] = useState('Seattle, WA')
  const [animal, setAnimal] = useState('dog')
  const [breed, setBreed] = useState('')
  const [breeds, setBreeds] = useState([])

  useEffect(() => {
    setBreeds([])
    setBreed('')
    pet
      .breeds(animal) // get all the breeds from the API for the selected animal
      .then(res => {
        const petNames = res.breeds.map(petObj => petObj.name)
        setBreeds(petNames)
      })
  }, [animal]) // if {animal} changes, useEffect will fire

  return (
    <div className="search-params">
      <form>
        {/* create location dropdown menu */}
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          ></input>
        </label>

        {/* create animal dropdown menu */}
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}
          >
            <option>All</option>
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        {/* create breed dropdown menu */}
        <label htmlFor="breed">
          Breed
          <select
            id={breed}
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
            disabled={breeds.length === 0}
          >
            <option>All</option>
            {breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams
