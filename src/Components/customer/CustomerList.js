import React, { useContext, useEffect } from "react";
import { CustomerContext } from "./CustomerProvider";
import { Customer } from "./Customer";
import "./Customer.css";

export const CustomerList = () => {
  // This state changes when `getCustomers()` is invoked below
  const { customers, getCustomers } = useContext(CustomerContext);

  useEffect(() => {
    console.log("LocationList: Initial render before data");
    getCustomers();
  }, []);

  useEffect(() => {
    console.log("LocationList: Location state changed");
    console.log(customers);
  }, [customers]);

  return (
    <div className="customers">
      {customers.map((cust) => (
        <Customer key={cust.id} customer={cust} />
      ))}
    </div>
  );
};
