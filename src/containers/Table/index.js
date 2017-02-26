import React from 'react';
import {connect} from 'react-redux';
import Row from 'Components/table/row';
import ColController from './col-controller';
const baseClassName = 'table-view';
const colControllerBaseClassName = [baseClassName, 'col-controllers'].join('__');
import {changeCellValue} from '../../actions/table-actions';

class Table extends React.Component {

    cellDidChangeValue = (rowIndex, cellIndex, newValue) => {
        this.props.changeCellValue(rowIndex, cellIndex, newValue);
    };

    render() {
        if (!this.props.data || !this.props.data.length) {
            return null;
        }
        let colControllers = [];
        for (let i = 0; i < this.props.colControllersNum; i++) {
            colControllers.push((
                <ColController
                    baseClassName={colControllerBaseClassName}
                    key={i}
                    index={i}
                />
            ));
        }

        return (
            <div className={baseClassName}>
                <div className={[baseClassName, 'col-controllers'].join('__')}>
                    {colControllers}
                </div>
                <div className={[baseClassName, 'body'].join('__')}>
                    {this.props.data.map((cells, index) => {
                        return (
                            <Row
                                onChangeCellValue={this.cellDidChangeValue}
                                baseClassName={baseClassName}
                                key={index}
                                index={index}
                                cells={cells}
                            />
                        );
                    })}
                </div>

            </div>
        )
    }
}

Table.propTypes = {
    index: React.PropTypes.number,
    rowControllersNum: React.PropTypes.number,
    colControllersNum: React.PropTypes.number
};

const mapStateToProps = (state) => {
    return {
        data: state.table.data,
        colControllersNum: state.table.colControllersNum,
        rowControllersNum: state.table.rowControllersNum,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeCellValue: (rowIndex, cellIndex, value) => {
            dispatch(changeCellValue(rowIndex, cellIndex, value))
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);