import {Pet as PetType} from './APIResponsesTypes'
import Pet from "./Pet";

const ResultPets = ({ pets } : {pets: PetType[]}) => {
  return (
    <div className="search">
      {!pets.length ? (
        <div className="loading-pane">
          <h1>No Pets Found</h1>
        </div>
      ) : (
        pets.map((pet) => (
          <Pet
            id={pet.id}
            animal={pet.animal}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};
export default ResultPets;
