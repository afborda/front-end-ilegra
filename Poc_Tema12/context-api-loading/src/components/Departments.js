import React, { useState } from "react";

import { getDepartment } from "../services/api";

const Departments = () => {
  const getDepartmentValue = async () => {
    const response = await getDepartment();
    console.log(response);
  };

  return (
    <div>
      <button onClick={getDepartmentValue}>Departments</button>
    </div>
  );
};

export default Departments;
