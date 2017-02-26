import React from 'react';
import {connect} from 'react-redux';
import Table from './Table';
import {setTableData} from '../actions/table-actions';

/**
 * Root container
 */
class App extends React.Component {
    componentDidMount() {
        this.props.loadEmptyTable();
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Table />
                    <div className="import">
                        <div className="btn import__import-button">Generate table</div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadEmptyTable: () => {
            dispatch(setTableData([['', ''], ['', '']]));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
