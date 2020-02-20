import React, { createContext, useReducer } from "react";
import { node } from "prop-types";
import { userReducer } from "../../reducers/UserReducer";

// create user context
const UserContext = createContext({});

// default state
const defaultUserState = false;

const UserContextProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(userReducer, defaultUserState);

  return (
    <UserContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const UserContextConsumer = UserContext.Consumer;

UserContextProvider.propTypes = {
  children: node.isRequired
};

export { UserContext, UserContextProvider, UserContextConsumer };
