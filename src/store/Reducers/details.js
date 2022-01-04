import { handleActions } from "redux-actions";
import { get_details_by_id_success } from "../Actions/details";

const initailSate = {}

const detailsReducer = handleActions({
  [get_details_by_id_success]: (state, action ) => action.payload
}, initailSate)

export default detailsReducer
