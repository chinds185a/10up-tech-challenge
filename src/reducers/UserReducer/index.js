import { USER_LOGIN, USER_LOGOUT } from "../../utilities/constants";

// actions
const loginUser = data => ({
  type: USER_LOGIN,
  data
});

// reducer
const userReducer = (userState, action) => {
  const { type } = action;

  switch (type) {
    case USER_LOGIN:
      // TODO: Login user
      return userState;
    default:
      return userState;
  }
};

export { userReducer, loginUser };
