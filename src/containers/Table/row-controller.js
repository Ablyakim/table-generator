import React from 'react';
import {connect} from 'react-redux';
import {addRowToIndex, removeRowByIndex} from '../../actions/table-actions';

class RowController extends React.Component {
    addRowAfter = () => {
        this.props.addRowToIndex(this.props.index + 1);
    };

    addRowBefore = () => {
        this.props.addRowToIndex(this.props.index);
    };

    removeRow = () => {
        this.props.removeRowByIndex(this.props.index);
    };

    render() {
        return (
            <div className={[this.props.baseClassName, 'cell'].join('__')}>
                <div className="menu-trigger">
                    ...
                    <ul className="dropdown">
                        <li onClick={this.addRowBefore}>Add row before</li>
                        <li onClick={this.addRowAfter}>Add row after</li>
                        <li onClick={this.removeRow}>Remove row</li>
                    </ul>
                </div>
            </div>
        );
    }
}

RowController.propTypes = {
    index: React.PropTypes.number,
    baseClassName: React.PropTypes.string
};

const mapStateToProps = (state) => {
    return {
        data: state.table.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addRowToIndex: (colIndex) => {
            dispatch(addRowToIndex(colIndex));
        },
        removeRowByIndex: (colIndex) => {
            dispatch(removeRowByIndex(colIndex));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RowController);