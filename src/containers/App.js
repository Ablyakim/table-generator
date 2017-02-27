import React from 'react';
import {connect} from 'react-redux';
import Table from './Table';
import TableGenerator from 'Components/table-generator';
import {setTableData} from '../actions/table-actions';
import RstTableGenerator from '../table-genrators/rst-generator';

let tableGenerator = new RstTableGenerator();
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
                    <TableGenerator
                        tableData={this.props.tableData}
                        tableGenerator={tableGenerator}
                    />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        tableData: state.table.data
    };
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
