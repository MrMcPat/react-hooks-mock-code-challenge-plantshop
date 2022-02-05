import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  //I set the state for plants to have the data from the json server stored into "plants"
  const [plants, setPlants] = useState([])

  const [search, setSearch] = useState("")

  //useEffect is used to render this fetch once when loaded
  useEffect(() => {
    //fetching the data from the db.json
    fetch("http://localhost:6001/plants")
    .then(resp => resp.json())
    .then(data => {
      //setting the state of "plants" variable in line 8 by putting the data into it
      setPlants(data)
    })
  }, [])

  //THIS IS IF YOU WANT TO SUBMIT A NEW PLANT WITHOUT PERSISTANCE
  // function handlePlantSubmit(newPlant) {
  //   setPlants([...plants, newPlant])
  // }

  //handles the onChange in the search bar located in the Search.js component
  //this updates the "search" variable in line 10 with whatever the user types in the search bar
  //this is passed into Search.js as a prop
  function handleSearch(e) {
    setSearch(e.target.value)
  }

  //this is to filter through the plants by name whenever the use types into the search bar
  //this gets passed into PlantList.js as a prop
  const filteredPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  //this is to update the list of plants with the newly submitted plant from NewPlantForm.js
  //this gets passed into NewPlantForm.js as a prop
  function handlePostPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  //this is to delete the plant that the user clicks
  //this gets passed into PlantList.js as a prop and then passed into PlantCard.js as a prop
  function handleDeleteClick(id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then(() => {
      const updatedPlants = plants.filter(plant => plant.id !== id)
      setPlants(updatedPlants)
    })
  }

  return (
    <main>
      {/* THIS IS IF YOU WANT TO SUBMIT A NEW PLANT WITHOUT PERSISTANCE */}
      {/* <NewPlantForm onPlantSubmit={handlePlantSubmit}/> */}

      <NewPlantForm onPostPlant={handlePostPlant}/>
      <Search onSearch={handleSearch}/>
      <PlantList plants={filteredPlants} onDeleteClick={handleDeleteClick}/>
    </main>
  );
}

export default PlantPage;
