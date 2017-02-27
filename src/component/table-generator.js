import React from 'react';

const TableGenerator = (props) => {
    if(!props.tableData || !props.tableData.length) {
        return null;
    }
    return (
        <div className="generated-table">
            <div className="generated-table__controller">
                <div className="btn">Copy</div>
            </div>
            <div className="generated-table__text">
                <pre>
                    {props.tableGenerator.generate(props.tableData)}
                </pre>
            </div>
        </div>

    )
};

TableGenerator.propTypes = {
    tableGenerator: React.PropTypes.object,
    tableData: React.PropTypes.array,
};

export default TableGenerator;