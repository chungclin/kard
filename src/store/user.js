
import axios from "axios";
import history from "../history";




const getUser = user => ({ type: GET_USER, user });
const removeUser = () => ({ type: REMOVE_USER });
const updateUser = user => ({ type: UPDATE_USER, user });


export const me = () => dispatch =>
  axios
    .get('/auth/me')
    .then(res => {
      dispatch(getUser(res.data || initialState.user));
      dispatch(fetchOrder(res.data.id));
    })
    .catch(err => console.error(err));


export default function(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return Object.assign({}, state, action.user);
        case REMOVE_USER:
            return initialState;
        case UPDATE_USER:
            return action.user;
        default:
            return state;
        }
}