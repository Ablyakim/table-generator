import React from 'react';
import Cell from './cell';

class Row extends React.Component {
    constructor(props) {
        super(props);
        this.baseClassName = [props.baseClassName,'row'].join('__');
    }
    cellDidClick = (cellIndex) => {
        if (this.props.onClickCell) {
            this.props.onClickCell(this.props.index, cellIndex);
        }
    };

    cellDidChangeValue = (cellIndex, newValue) => {
        if (this.props.onChangeCellValue) {
            this.props.onChangeCellValue(this.props.index, cellIndex, newValue);
        }
    };

    render() {
        if (!this.props.cells) {
            return null;
        }
        return (
            <div className={this.baseClassName}>
                {this.props.cells.map((value, index) => {
                    return <Cell
                        baseClassName={this.baseClassName}
                        onClick={this.cellDidClick}
                        onChangeValue={this.cellDidChangeValue}
                        key={index}
                        index={index}
                        value={value}
                    />
                })}
            </div>
        );
    }
}

Row.propTypes = {
    index: React.PropTypes.number,
    baseClassName: React.PropTypes.string,
    cellValues: React.PropTypes.array,
    onClickCell: React.PropTypes.func,
    onChangeCellValue: React.PropTypes.func
};


export default Row