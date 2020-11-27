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
export const ApplicationViews = (props) => {
  return (
    <>
      <AnimalProvider>
        <LocationProvider>
          <CustomerProvider>
            <Route exact path="/animal">
              <AnimalList />
            </Route>
          </CustomerProvider>
        </LocationProvider>
      </AnimalProvider>

      <EmployeeProvider>
        <Route exact path="/employees">
          render={(props) => <EmployeeList {...props} />}
        </Route>
      </EmployeeProvider>

      <EmployeeProvider>
        <Route
          exact
          path="/employees/create"
          render={(props) => <EmployeeForm {...props} />}
        />
      </EmployeeProvider>
    </>
  );
};
