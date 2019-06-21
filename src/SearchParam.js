import React, {useState, useEffect} from 'react'
import pet, {ANIMALS} from '@frontendmasters/pet'
import useDropdown from './useDropdown'
import Results from './Results'

const SearchParams = () => {
  // setting states
  // location is destructured useState array (hook)
  // useState returns an array, with the first item being the value of state
  // and the second item being a function to change the value of state
  const [location, setLocation] = useState('Seattle, WA')
  const [breeds, setBreeds] = useState([])
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS)
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds)

  const [petResults, setPetResults] = useState([])

  async function requestPets() {
    // use pet API to get animals that match search criteria
    const {animals} = await pet.animals({location, breed, type: animal})
    setPetResults(animals || [])
  }

  // lifecycle event
  useEffect(() => {
    setBreeds([])
    setBreed('')

    pet
      .breeds(animal) // get all the breeds from the API for the selected animal
      .then(res => {
        const petBreeds = res.breeds.map(petObj => petObj.name)
        setBreeds(petBreeds)
      })
  }, [animal, setBreed])
  // if animal or setBreed changes, useEffect will fire
  // setBreed is only included because React hooks wants it there
  // it doesn't matter to us

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault()
          requestPets()
        }}
      >
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
        <AnimalDropdown />

        {/* create breed dropdown menu */}
        <BreedDropdown />

        <button>Submit</button>
      </form>

      <Results pets={petResults} />
    </div>
  )
}

export default SearchParams
