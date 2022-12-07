import { USER_LOGOUT, USER_LOGIN, USER_REGISTER } from "../types/UserType";
import toast from 'react-hot-toast';

let userStorage = {};
if (localStorage.getItem(USER_LOGIN)) {
    userStorage = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const userList = {
    user: [
        {
            userId: "1",
            userName: "Admin Khánh",
            userPassword: "123456",
            userEmail: "admin@gmail.com",
            userRole: "1"
        },
        {
            userId: "2",
            userName: "User Khánh",
            userPassword: "123456",
            userEmail: "user@gmail.com",
            userRole: "2"
        }
    ],
    loginUser: userStorage
}
export const UserReducer = (state = userList, action) => {

    switch (action.type) {

        case USER_LOGOUT: {
            localStorage.removeItem(USER_LOGIN);
            return { ...state, loginUser: "" }
        }
        case USER_LOGIN: {
            let index = state.user.findIndex(user => user.userEmail === action.userData.userEmail && user.userPassword === action.userData.userPassword);
            if (index !== -1) {
                let userLogin = state.user[index];
                toast.success("Login success")
                localStorage.setItem(USER_LOGIN, JSON.stringify(userLogin));
                return { ...state, loginUser: userLogin }
            }
            else {
                toast.error("Login failed")
                return { ...state }
            }

        }
        case USER_REGISTER: {
            let userListUpdate = [...state.user];
            let index = userListUpdate.findIndex(user => user.userEmail === action.userData.userEmail);
            if (index !== -1) {
                toast.error("Email already exists")
                return { ...state }

            }
            else {
                userListUpdate.push(action.userData);
                state.user = userListUpdate;
                toast.success("Register success")
                return { ...state }

            }
        }
        default: return { ...state }
    }

}