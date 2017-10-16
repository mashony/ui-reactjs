import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

export default class WfpActionButton extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      type: this.props.type
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onActionClick(this.props.action);
  }

  render() {
    let classes = classnames('wfp-btn btn-small xsmall modal-trigger', {
      'wfp-btn--primary': this.props.type === 'primary',
      'wfp-btn--secondary': this.props.type === 'secondary',
      'wfp-btn--tertiary': this.props.type === 'tertiary'
    });
    return (
      <button className={classes} onClick={this.handleClick}>
        <span>{this.props.action}</span>
      </button>
    );
  }
}

WfpActionButton.propTypes = {
  action: PropTypes.string.isRequired,
  type: PropTypes.string
};

WfpActionButton.defaultProps = {
  type: 'primary'
};