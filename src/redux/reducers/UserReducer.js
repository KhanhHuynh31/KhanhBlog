import { LOGOUT_SUCCESS, LOGIN_SUCCESS, REGISTER_SUCCESS } from "../types/UserType";

let userStorage = {};
if (localStorage.getItem(LOGIN_SUCCESS)) {
    userStorage = JSON.parse(localStorage.getItem(LOGIN_SUCCESS));
}
const initialState = {
    login: {
        currentUser: userStorage,
    },
    register: {
        success: false
    },
    logout: {
        success: false
    }
}
export const UserReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGOUT_SUCCESS: {
            localStorage.removeItem(LOGIN_SUCCESS);
            state.login.currentUser = "";
            return { ...state }
        }
        case LOGIN_SUCCESS: {
            let userLogin = action.userData;
            localStorage.setItem(LOGIN_SUCCESS, JSON.stringify(userLogin));
            state.login.currentUser = userLogin;
            return { ...state }
        }
        case REGISTER_SUCCESS: {
            state.register.isFetching = false;
            state.register.error = false;
            state.register.success = true;
            return { ...state }
        }
        default: return { ...state }
    }

}