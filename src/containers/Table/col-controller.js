import React from 'react';
import {connect} from 'react-redux';
import {addColToIndex, removeColByIndex} from '../../actions/table-actions';

class ColController extends React.Component {
    addColAfter = () => {
        this.props.addColToIndex(this.props.index + 1);
    };

    addColBefore = () => {
        this.props.addColToIndex(this.props.index);
    };
    removeCol = () => {
        this.props.removeColByIndex(this.props.index);
    };

    render() {
        return (
            <div className={[this.props.baseClassName, 'cell'].join('__')}>
                <div className="menu-trigger">
                    ...
                    <ul className="dropdown">
                        <li onClick={this.addColBefore}>Add col before</li>
                        <li onClick={this.addColAfter}>Add col after</li>
                        <li onClick={this.removeCol}>Remove col</li>
                    </ul>
                </div>
            </div>
        );
    }
}

ColController.propTypes = {
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
        addColToIndex: (colIndex) => {
            dispatch(addColToIndex(colIndex));
        },
        removeColByIndex: (colIndex) => {
            dispatch(removeColByIndex(colIndex));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ColController);