import { LOGIN_SUCCESS, REGISTER_SUCCESS } from '../types/UserType';
import { DOMAIN } from '../../util/settings/config';
import axios from 'axios';
import toast from 'react-hot-toast';
import { LoginModalAction } from '../actions/ModalAction';
import { LoadingAction } from '../actions/LoadingAction'

export const LoginAction = (userData) => {
    return async (dispatch) => {
        dispatch(LoadingAction(true));
        try {
            const res = await axios.post(`${DOMAIN}/v1/auth/login`, userData);
            dispatch({
                type: LOGIN_SUCCESS,
                userData: res.data
            });
            dispatch(LoginModalAction(false));
            dispatch(LoadingAction(false));
            toast.success("Login success");
        } catch (err) {
            dispatch(LoadingAction(false));
            toast.error(err.response.data)
        }
    }
}
export const RegisterAction = (userData) => {
    return async (dispatch) => {
        dispatch(LoadingAction(true));
        try {
            await axios.post(`${DOMAIN}/v1/auth/register`, userData);
            dispatch({
                type: REGISTER_SUCCESS
            });
            dispatch(LoginModalAction(true));
            dispatch(LoadingAction(false));
            toast.success("Register success");
        } catch (err) {
            dispatch(LoadingAction(false));
            toast.error(err.response.data)
        }
    }
}
