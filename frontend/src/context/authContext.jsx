import React, { createContext, useEffect, useReducer } from "react";

const initialState = {
  user:
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  token: localStorage.getItem("token") || null,
  isUserLoggedIn: localStorage.getItem("token") ? true : false,
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        token: null,
        isUserLoggedIn: false,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        token: action.payload.token,
        isUserLoggedIn: true,
      };

    case "LOGOUT":
      return {
        user: null,
        token: null,
        isUserLoggedIn: false,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("token", state.token);
    localStorage.setItem("isUserLoggedIn", state.isUserLoggedIn);
  }, [state]);

  return (
    <authContext.Provider
      value={{
        user: state.user,
        token: state.token,
        isUserLoggedIn: state.isUserLoggedIn,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
