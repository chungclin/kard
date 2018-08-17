import axios from "axios";
import history from "../history";

const initialState = {};

const GET_ACCESSTOKEN = "GET_ACCESSTOKEN";

const getInformation = information => ({
  type: GET_ACCESSTOKEN,
  information
});

export const fetchInformation = successToken => dispatch => {
  console.log(successToken)
  return axios
    .post("api/get_access_token", { successToken })
    .then(res => {
      dispatch(getInformation(res.data));
        history.push('/transactions')
    })
    .catch(err => console.error(err));
};

export default function plaidReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ACCESSTOKEN:
      return action.information;
    default:
      return state;
  }
}