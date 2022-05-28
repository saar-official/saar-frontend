import { createContext } from "react";

export const DEFAULT_USER_VALUE = null;

const UserContext = createContext({
  user: DEFAULT_USER_VALUE,
  setUser: () => {},
});

export default UserContext;
