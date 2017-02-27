import React from 'react';
import {connect} from 'react-redux';
import Table from './Table';
import TableGenerator from 'Components/table-generator';
import {setTableData} from '../actions/table-actions';
import RstTableGenerator from '../table-genrators/rst-generator';
import RstTableImporter from '../table-importers/rst-importer';

let tableGenerator = new RstTableGenerator();
let tableImporter = new RstTableImporter();
/**
 * Root container
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            importData: ''
        };
    }

    componentDidMount() {
        this.props.loadEmptyTable();
    }

    handleChangeImportData = (e) => {
        this.setState({importData: e.target.value});
    };

    importData = () => {
        this.props.loadTable(tableImporter.execute(this.state.importData));
    };

    loadEmptyTable = () => {
        this.props.loadEmptyTable();
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="import">
                        <div
                            onClick={this.importData}
                            className="btn import__import-button"
                        >Import
                        </div>
                        <textarea
                            onChange={this.handleChangeImportData}
                            value={this.state.importData}
                            className="import__data"
                        />
                    </div>
                    <div
                        style={{marginBottom: '40px'}}
                        onClick={this.loadEmptyTable}
                        className="btn"
                    >Clear table</div>
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
        },
        loadTable: (data) => {
            dispatch(setTableData(data));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
