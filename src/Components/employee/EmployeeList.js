import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { Employee } from "./Employee";
import "./Employee.css";
import { AnimalContext } from "../animal/AnimalProvider";
import { LocationContext } from "../location/LocationProvider";

export const EmployeeList = (props) => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext);
  const { animals, getAnimals } = useContext(AnimalContext);
  const { locations, getLocations } = useContext(LocationContext);

  useEffect(() => {
    // console.log("LocationList: Initial render before data");
    getAnimals().then(getLocations).then(getEmployees);
  }, []);

  // useEffect(() => {
  //   // console.log("LocationList: Location state changed");
  //   // console.log(employees);
  // }, [employees]);

  return (
    <div className="employees">
      <h1>Employees</h1>
      <button onClick={() => props.history.push("/employees/create")}>
        Add Employee
      </button>
      <article className="employeeList">
        {employees.map((employee) => {
          const pet = animals.find((a) => a.id === employee.animalId);
          const clinic = locations.find((l) => l.id === employee.locationId);

          return (
            <Employee
              key={employee.id}
              employee={employee}
              animal={pet}
              location={clinic}
            />
          );
        })}
      </article>
    </div>
  );
};
