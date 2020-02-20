import { USER_LOGIN, USER_LOGOUT, HOME_ROUTE } from "../../utilities/constants";
import history from "../../utilities/histoy";
const ls = require("local-storage");

// actions
const loginUser = data => ({
  type: USER_LOGIN,
  data
});

const logoutUser = () => ({
  type: USER_LOGOUT
});

// reducer
const userReducer = (userState, action) => {
  const { data, type } = action;

  switch (type) {
    case USER_LOGIN:
      ls.set("user", data);
      return data;
    case USER_LOGOUT:
      ls.remove("user");
      return false;
    default:
      return userState;
  }
};

export { userReducer, loginUser, logoutUser };
