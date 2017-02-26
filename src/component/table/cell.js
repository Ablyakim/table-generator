import React from 'react';
import classNames from 'classnames';

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.baseClassName = [props.baseClassName, 'cell'].join('__');
        this.state = {
            showEditor: false
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.input && !prevState.showEditor && this.state.showEditor) {
            this.input.focus();
        }
    }

    handleChange = (e) => {
        this.props.onChangeValue(this.props.index, e.target.value)
    };

    handleClick = (e) => {
        this.setState({showEditor: true});
    };

    handleOverlayClick = (e) => {
        e.stopPropagation();
        this.setState({showEditor: false});
    };

    render() {
        return (
            <div className={this.baseClassName} onClick={this.handleClick}>
                <div
                    onClick={this.handleOverlayClick}
                    className={
                        classNames(
                            [this.baseClassName, 'overlay'].join('__'),
                            {hidden: !this.state.showEditor}
                        )
                    }
                />
                <div
                    className={
                        classNames(
                            [this.baseClassName, 'text'].join('__'),
                            {hidden: this.state.showEditor}
                        )
                    }
                >
                    {this.props.value}
                </div>
                <textarea
                    ref={(input) => this.input = input}
                    onChange={this.handleChange}
                    value={this.props.value}
                    className={
                        classNames(
                            [this.baseClassName, 'editor'].join('__'),
                            {hidden: !this.state.showEditor}
                        )
                    }
                />
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
    onChangeValue: React.PropTypes.func.isRequired,
};
export default Cell;