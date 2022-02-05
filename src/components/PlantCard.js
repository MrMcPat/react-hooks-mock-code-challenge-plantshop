import React, {useState} from "react";

function PlantCard({id, name, image, price, onDeleteClick}) {
const [isSold, setIsSold] = useState(false)

//for toggling the "In Stock/Out of Stock" button
function handleSold() {
  setIsSold(isSold => !isSold)
}

//this function gets fired when the Delete button gets clicked
//onDeleteClick gets invoked with the id as an argument to delete the plant
function handleDeleteClick() {
  onDeleteClick(id)
}

//changing the appearance and text of the "In Stock/Out of Stock" button when clicked
const toggleSold = isSold ? "Out of Stock" : "In Stock"
const toggleClass = isSold ? "" : "primary"

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {/* NOTE I ALTERED THE STARTING CODE ON THE BUTTON BELOW BECAUSE I SIMPLY HATE THE WAY THEY FORMATTED IT */}
        <button className={toggleClass} onClick={handleSold}>{toggleSold}</button>
        <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default PlantCard;
