import React from 'react';
class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.baseClassName = [props.baseClassName, 'cell'].join('__');
    }

    handleChange = (e) => {

    };

    handleClick = (e) => {

    };

    render() {
        return (
            <div className={this.baseClassName}>
                {this.props.index} - {this.props.value}
            </div>
        );
    }
}

Cell.propTypes = {
    index: React.PropTypes.number,
    baseClassName: React.PropTypes.string,
    value: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number
    ]),
    onClick: React.PropTypes.func,
    onChangeValue: React.PropTypes.func,
};
export default Cell;