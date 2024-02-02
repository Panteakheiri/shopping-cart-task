import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  userName: null,
  logedin: () => {},
  logout: () => {},
});

export default AuthContext;