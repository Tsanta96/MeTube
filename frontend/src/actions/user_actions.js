import * as UserApiUtil from '../util/user_api_util';
import { receiveUserUploads } from './video_actions';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';


const receiveUser = (user) => {
    return {
        type: RECEIVE_USER, 
        user
    }
}

const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const fetchUsers = () => dispatch => {
    return UserApiUtil.fetchUsers()
        .then(users => dispatch(receiveUsers(users)))
       
}

export const fetchUser = (userId) => dispatch => {
    return UserApiUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
}

export const fetchUserProfile = (userId) => dispatch => {
    return UserApiUtil.fetchUserProfile(userId)
        .then(user => dispatch(receiveUser(user)))
}