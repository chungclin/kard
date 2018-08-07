import axios from "axios";
import history from "../history";


const initialState = {};

const GET_ACCOUNTS = "GET_ACCOUNTS";

const getItem = item => ({
  type: GET_ACCOUNTS,
  item
});

// fetch accounts from api
export const fetchItem = () => dispatch => {
  return axios
    .get("/api/plaid/auth")
    .then(res => {
        dispatch(getItem(res.data));
    })
    .catch(err => console.error(err));
};

export default function accounts(state = initialState, action) {
  switch (action.type) {
    case GET_ACCOUNTS:
      return action.item;
    default:
      return state;
  }
}