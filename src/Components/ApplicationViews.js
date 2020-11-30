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
          </AnimalProvider>
        </LocationProvider>
      </EmployeeProvider>

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
          </AnimalProvider>
        </LocationProvider>
      </CustomerProvider>

      {/* <EmployeeProvider>
        <LocationProvider></LocationProvider>
      </EmployeeProvider> */}
    </>
  );
};
