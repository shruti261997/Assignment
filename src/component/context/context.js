import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
const initialState = { login: false };

export const Login = createContext();    

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log('context component')
    return (
    <Login.Provider value={{ login: state.login, dispatch }}>
      {children}
    </Login.Provider>
  );
};
