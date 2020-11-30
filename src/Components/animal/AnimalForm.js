import React, { useContext, useRef, useEffect } from "react";
// import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../location/LocationProvider";
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css";

export const AnimalForm = (props) => {
  //   const { addEmployee } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);
  const { animals, getAnimals, addAnimal } = useContext(AnimalContext);

  /*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.

        No more `document.querySelector()` in React.
    */
  const name = useRef(null);
  const location = useRef(null);
  const animal = useRef(null);

  /*
        Get animal state and location state on initialization.
    */
  useEffect(() => {
    getLocations().then(getAnimals);
  }, []);

  const constructNewAnimal = () => {
    const locationId = parseInt(location.current.value);
    // const animalId = parseInt(animal.current.value);
    addAnimal({
      name: name.current.value,
      locationId,
      customerId: parseInt(localStorage.getItem("kennel_customer")),
    }).then(() => props.history.push("/animals"));
  };
  return (
    <form className="animalForm">
      <h2 className="animalForm__title">New Animal</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="animalName">Animal name: </label>
          <input
            type="text"
            id="animalName"
            ref={name}
            required
            autoFocus
            className="form-control"
            placeholder="Animal name"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select
            defaultValue=""
            name="location"
            ref={location}
            id="animalLocation"
            className="form-control"
          >
            <option value="0">Select a location</option>
            {locations.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault(); // Prevent browser from submitting the form
          constructNewAnimal();
        }}
        className="btn btn-primary"
      >
        Save Animal
      </button>
    </form>
  );
};
