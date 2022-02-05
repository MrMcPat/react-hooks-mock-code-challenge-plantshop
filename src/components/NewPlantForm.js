import React, {useState} from "react";

function NewPlantForm({onPostPlant}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")

  function submitHandler(e) {
    e.preventDefault();

    // THIS IS IF YOU WANT TO SUBMIT A NEW PLANT WITHOUT PERSISTANCE
    // onPlantSubmit({
    //   name,
    //   image,
    //   price,
    // })

    //adds newly submitted plants to the db.json
    fetch("http://localhost:6001/plants",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        image: image,
        price: price,
      })
    })
    .then(resp => resp.json())
    //onPostPlant prop function gets invoked to update the plants on the webpage with the newly submitted plant
    .then(newPlant => onPostPlant(newPlant))
    setName("")
    setImage("")
    setPrice("")
  }

  return (
    <div className="new-plant-form" onSubmit={submitHandler}>
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" value={name} placeholder="Plant name" onChange={(e) => setName(e.target.value)} />
        <input type="text" name="image" value={image} placeholder="Image URL" onChange={(e) => setImage(e.target.value)}/>
        <input type="number" name="price" value={price} step="0.01" placeholder="Price" onChange={(e) => setPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
