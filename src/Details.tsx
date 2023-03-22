import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdoptedPetContext from "./AdoptedPetContext";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBondaury";
import fetchPet from "./fetchPet";
import Modal from "./Modal";
import { PetAPIResponse } from "./APIResponsesTypes";

const Details = () => {
  const { id } = useParams();
  if(!id){
    throw new Error('why did you not give me an id. I wanted an id. I have no id');
  }
  
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const results = useQuery<PetAPIResponse>(["details", id], fetchPet);
  // eslint-disable-next-line
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🦦</h2>
      </div>
    );
  }

  const pet = results?.data?.pets[0];
  if (!pet) {
    throw new Error("no pet lol")
  }

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.name} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    setAdoptedPet(pet);
                    navigate("/");
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
