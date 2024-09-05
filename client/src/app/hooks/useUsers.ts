import { useState } from "react";
import { userAdapter } from "../adapter/users.adapter";

export function useUsers() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await userAdapter();
      setUsers(res);
    } catch (err) {
      console.log(err);
    }
  };

  return { users, getUsers };
}
