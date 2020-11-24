import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./location/LocationProvider";
import { AnimalProvider } from "./animal/AnimalProvider";
import { LocationList } from "./location/LocationList";
import { AnimalList } from "./animal/AnimalList";
import { CustomerProvider } from "./customer/CustomerProvider";

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
    </>
  );
};
