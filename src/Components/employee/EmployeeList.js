import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { Employee } from "./Employee";
import "./Employee.css";

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
  const { employees, getEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    // console.log("LocationList: Initial render before data");
    getEmployees();
  }, []);

  useEffect(() => {
    // console.log("LocationList: Location state changed");
    // console.log(employees);
  }, [employees]);

  return (
    <div className="employees">
      {employees.map((emp) => (
        <Employee key={emp.id} employee={emp} />
      ))}
    </div>
  );
};
