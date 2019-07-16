import { alertConstants } from "../constants/alert.constants";
import { userConstants } from "../constants/user.constants";
import { alertActions } from "../actions/alert.actions";
import { userService } from "../services/user.service";

export const userActions = {
  login,
  logout,
  register,
  getAll,
  delete: _delete
};

function login(identifier, password) {
  return dispatch => {
    dispatch(request({ identifier }));

    userService.login(identifier, password).then(
      user => {
        dispatch(succes(user));
        window.history.push("/");
      },
      error => {
        dispatch(failure(error));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
}

function logout(message) {
  return { type: alertConstants.ERROR, message };
}

function register() {
  return { type: alertConstants.CLEAR };
}

function getAll() {
  return { type: alertConstants.CLEAR };
}

function _delete() {
  return { type: alertConstants.CLEAR };
}

function request(user) {
  return {
    type: userConstants.LOGIN_REQUEST,
    user
  };
}

function succes(user) {
  return {
    type: userConstants.LOGIN_SUCCESS,
    user
  };
}

function failure(error) {
  return {
    type: userConstants.LOGIN_FAILURE,
    error
  };
}
