export const SET_TABLE_DATA = 'set-table-data';
export const ADD_COL_TO_INDEX = 'add-col-to-index';
export const REMOVE_COL_BY_INDEX = 'remove-col-from-index';

export const setTableData = (data) => {
    return {type: SET_TABLE_DATA, data};
};

export const addColToIndex = (colIndex, value = '') => {
    return {type: ADD_COL_TO_INDEX, colIndex, value};
};

export const removeColByIndex = (colIndex) => {
    return {type: REMOVE_COL_BY_INDEX, colIndex};
};