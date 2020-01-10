import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';


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
        .then( users => dispatch(receiveUsers(users)))
       
}

export const fetchUser = (userId) => dispatch => {
    return UserApiUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
}