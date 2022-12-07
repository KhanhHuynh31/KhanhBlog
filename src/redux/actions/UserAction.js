import { USER_LOGIN, USER_REGISTER } from '../types/UserType'

export const LoginAction = (userData) => {
    return {
        type: USER_LOGIN,
        userData,
    }
}
export const RegisterAction = (userData) => {
    return {
        type: USER_REGISTER,
        userData,
    }
}