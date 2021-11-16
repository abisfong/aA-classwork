import {
  postUser,
  postSession,
  deleteSession
} from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const createUser = formInput => dispatch => (
  postUser(formInput).then(user => dispatch(receiveCurrentUser(user)))
)

export const login = formInput => dispatch => (
  postSession(formInput).then(user => receiveCurrentUser(user))
)

export const logout = () => dispatch => (
  deleteSession().then(() => dispatch(logoutCurrentUser()))
)