import React from 'react';
import {connect} from 'react-redux';
import Row from 'Components/table/row';

const baseClassName = 'table-view';

class Table extends React.Component {
    render() {
        if (!this.props.data || !this.props.data.length) {
            return null;
        }
        return (
            <div className={baseClassName}>
                {this.props.data.map((cells, index) => {
                    return (
                        <Row
                            baseClassName={baseClassName}
                            key={index}
                            index={index}
                            cells={cells}
                        />
                    );
                })}
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
        data: state.table.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);