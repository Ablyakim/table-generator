import React from 'react';
const copyText = 'Copy';
const copiedText = 'Copied';

class TableGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            copyText: copyText
        }
    }

    copyToClipboard = () => {
        let value = this.props.tableGenerator
            .generate(this.props.tableData);

        let input = document.createElement("textarea");
        input.value = value;

        document.querySelector('body')
            .appendChild(input);
        input.select();

        try {
            document.execCommand('copy');
            this.setState({copyText: copiedText});
            setTimeout(() => {
                this.setState({copyText: copyText});
            }, 3000);
        } catch (err) {
            console.log(err);
            window.prompt("Copy to clipboard: Ctrl+C, Enter", value);
        }
        input.remove();
    };

    render() {
        if (!this.props.tableData || !this.props.tableData.length) {
            return null;
        }
        return (
            <div className="generated-table">
                <div className="generated-table__controller">
                    <div className="btn" onClick={this.copyToClipboard}>
                        {this.state.copyText}
                    </div>
                </div>
                <div className="generated-table__text">
                <pre>
                    {this.props.tableGenerator.generate(this.props.tableData)}
                </pre>
                </div>
            </div>

        )
    }
}

TableGenerator.propTypes = {
    tableGenerator: React.PropTypes.object,
    tableData: React.PropTypes.array,
};

export default TableGenerator;