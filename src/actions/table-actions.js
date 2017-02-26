export const SET_TABLE_DATA = 'set-table-data';
export const ADD_COL_TO_INDEX = 'add-col-to-index';
export const REMOVE_COL_BY_INDEX = 'remove-col-from-index';
export const CHANGE_CELL_VALUE = 'change-cell-value';

export const setTableData = (data) => {
    return {type: SET_TABLE_DATA, data};
};

export const addColToIndex = (colIndex, value = '') => {
    return {type: ADD_COL_TO_INDEX, colIndex, value};
};

export const removeColByIndex = (colIndex) => {
    return {type: REMOVE_COL_BY_INDEX, colIndex};
};

export const changeCellValue = (rowIndex, colIndex, value) => {
    return {type: CHANGE_CELL_VALUE, rowIndex, colIndex, value};
};