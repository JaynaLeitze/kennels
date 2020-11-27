import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { Employee } from "./Employee";
import "./Employee.css";

export const EmployeeList = (props) => {
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
      <h1>Employees</h1>
      <button onClick={() => props.history.push("/employees/create")}>
        Add Employee
      </button>
      <article className="employeeList">
        {employees.map((employee) => (
          <Employee key={employee.id} employee={employee} />
        ))}
      </article>
    </div>
  );
};
