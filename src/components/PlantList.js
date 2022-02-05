import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onDeleteClick }) {
  //mapping through the plants to render every plant in the PlantCard.js component
  const plantCards = plants.map((plant) => {
    return (
      <PlantCard
        key={plant.id}
        id={plant.id}
        name={plant.name}
        image={plant.image}
        price={plant.price}
        onDeleteClick={onDeleteClick}
      />
    );
  });
  return <ul className="cards">{plantCards}</ul>;
}

export default PlantList;
