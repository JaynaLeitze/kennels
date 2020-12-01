import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./location/LocationProvider";
import { AnimalProvider } from "./animal/AnimalProvider";
import { LocationList } from "./location/LocationList";
import { AnimalList } from "./animal/AnimalList";
import { CustomerProvider } from "./customer/CustomerProvider";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeForm } from "./employee/EmployeeForm";
import { AnimalForm } from "./animal/AnimalForm";
import { EmployeeDetail } from "./employee/EmployeeDetail";
import { LocationDetail } from "./location/LocationDetail";
import { AnimalDetails } from "./animal/AnimalDetail";

export const ApplicationViews = (props) => {
  console.log(EmployeeList);
  return (
    <>
      <EmployeeProvider>
        <LocationProvider>
          <AnimalProvider>
            <Route
              exact
              path="/employees"
              render={(props) => <EmployeeList {...props} />}
            />

            <Route
              exact
              path="/employees/create"
              render={(props) => <EmployeeForm {...props} />}
            />
            <Route
              path="/employees/:employeeId(\d+)"
              render={(props) => <EmployeeDetail {...props} />}
            />
          </AnimalProvider>
        </LocationProvider>
      </EmployeeProvider>

      <EmployeeProvider>
        <CustomerProvider>
          <LocationProvider>
            <AnimalProvider>
              <Route
                exact
                path="/animals"
                render={(props) => <AnimalList {...props} />}
              />
              <Route
                exact
                path="/animals/create"
                render={(props) => <AnimalForm {...props} />}
              />
              <Route
                exact
                path="/locations"
                render={(props) => <LocationList {...props} />}
              />
              <Route
                path="/locations/:locationId(\d+)"
                render={(props) => <LocationDetail {...props} />}
              />
              <Route
                path="/animals/:animalId(\d+)"
                render={(props) => <AnimalDetails {...props} />}
              />
            </AnimalProvider>
          </LocationProvider>
        </CustomerProvider>
      </EmployeeProvider>

      {/* <EmployeeProvider>
        <LocationProvider></LocationProvider>
      </EmployeeProvider> */}
    </>
  );
};
