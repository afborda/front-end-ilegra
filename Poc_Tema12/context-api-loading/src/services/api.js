import { users, departments } from "../mock";

export const getUsers = async () => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(users);
    }, 2000)
  );
};

export const getDepartment = async () => {
  return new Promise(resolve =>
    setTimeout(() => {
      resolve(departments);
    }, 1500)
  );
};
