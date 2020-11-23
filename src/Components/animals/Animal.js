import React from "react";
import "./Animal.css";

//access data from database
export const Animal = ({ animal }) => (
  <section className="animal">
    <h3 className="animal__name">{animal.name}</h3>
    <p className="animal__address">{animal.breed}</p>
  </section>
);
