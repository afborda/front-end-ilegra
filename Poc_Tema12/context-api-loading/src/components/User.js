import React, { useState, useContext } from "react";
import { getUsers } from "../services/api";
import { testeContext } from "../App";

const Users = () => {
  const getUsersValue = async () => {
    const response = await getUsers();
    console.log({ response });
  };
  return (
    <div>
      <testeContext.Consumer>
        {teste => {
          return (
            <>
              <h1>Produtos POC</h1>
              <button onClick={getUsersValue}> teste</button>
            </>
          );
        }}
      </testeContext.Consumer>
    </div>
  );
};

export default Users;
