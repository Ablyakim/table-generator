export const SET_TABLE_DATA = 'set-table-data';
export const CHANGE_CELL_VALUE = 'change-cell-value';

export const ADD_COL_TO_INDEX = 'add-col-to-index';
export const REMOVE_COL_BY_INDEX = 'remove-col-from-index';

export const ADD_ROW_TO_INDEX = 'add-row-to-index';
export const REMOVE_ROW_BY_INDEX = 'remove-row-from-index';


export const setTableData = (data) => {
    return {type: SET_TABLE_DATA, data};
};

export const changeCellValue = (rowIndex, colIndex, value) => {
    return {type: CHANGE_CELL_VALUE, rowIndex, colIndex, value};
};

export const addColToIndex = (colIndex, value = '') => {
    return {type: ADD_COL_TO_INDEX, colIndex, value};
};

export const removeColByIndex = (colIndex) => {
    return {type: REMOVE_COL_BY_INDEX, colIndex};
};

export const addRowToIndex = (rowIndex, cells = []) => {
    return {type: ADD_ROW_TO_INDEX, rowIndex, cells};
};

export const removeRowByIndex = (rowIndex) => {
    return {type: REMOVE_ROW_BY_INDEX, rowIndex};
};
