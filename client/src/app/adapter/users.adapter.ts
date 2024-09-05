import { getUsers } from "../interceptors/users";
import { Users } from "../models/usersApi";

export async function userAdapter() {
  try {
    const res = await getUsers();

    const users = res.data;

    return users.map((user: Users) => ({
      _id: user.id,
      _firstname: user.firstname,
      _lastname: user.lastname,
      _email: user.email,
      _birthDate: user.birthDate,
      _login: user.login,
      _address: user.address,
      _phone: user.phone,
      _website: user.website,
      _company: user.company,
    }));
  } catch (err) {
    throw new Error("Error getting users");
  }
}
