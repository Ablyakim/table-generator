import {
    SET_TABLE_DATA,
    ADD_COL_TO_INDEX,
    REMOVE_COL_BY_INDEX,
    CHANGE_CELL_VALUE
} from '../actions/table-actions';

const calcAllControllersNum = (tableData) => {
    let rowControllersNum = 0;
    let colControllersNum = 0;
    if (tableData) {
        rowControllersNum = tableData.length;
        tableData.forEach((row) => {
            if (row.length > colControllersNum) {
                colControllersNum = row.length;
            }
        });
    }
    return {rowControllersNum, colControllersNum};
};

const setTableData = (state, action) => {
    let tableData = action.data.slice();
    return Object.assign({}, state, {
        data: tableData
    }, calcAllControllersNum(tableData));
};

const addColToIndex = (state, action) => {
    let tableData = state.data.slice();
    tableData.forEach((item) => {
        item.splice(action.colIndex, 0, action.value);
    });
    return Object.assign({}, state, {
        data: tableData
    }, calcAllControllersNum(tableData));
};

const removeColByIndex = (state, action) => {
    let tableData = state.data.slice();
    tableData.forEach((item) => {
        item.splice(action.colIndex, 1);
    });
    return Object.assign({}, state, {
        data: tableData
    }, calcAllControllersNum(tableData));
};

const changeCellValue = (state, action) => {
    let tableData = state.data.slice();
    tableData[action.rowIndex][action.colIndex] = action.value;
    return Object.assign({}, state, {
        data: tableData
    }, calcAllControllersNum(tableData));
};

export default (state = {}, action) => {
    switch (action.type) {
        case SET_TABLE_DATA:
            return setTableData(state, action);
        case ADD_COL_TO_INDEX:
            return addColToIndex(state, action);
        case REMOVE_COL_BY_INDEX:
            return removeColByIndex(state, action);
        case CHANGE_CELL_VALUE:
            return changeCellValue(state, action);
        default:
            return state;
    }
}