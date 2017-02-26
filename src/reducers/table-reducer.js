import {SET_TABLE_DATA} from '../actions/table-actions';

export default (state = {}, action) => {
    switch (action.type) {
        case SET_TABLE_DATA:
            return Object.assign({}, state, {
                data: action.data.slice()
            });
        default:
            return state;
    }
}