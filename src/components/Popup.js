import React, { Component } from 'react';
import './Popup.css';
import PropTypes from 'prop-types';

class Popup extends Component {
  constructor() {
    super();

    this.state = {
      triggers: true,
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({
      triggers: false,
    });
  }

  render() {
    const { trigger } = this.props;
    const { triggers } = this.state;

    return (triggers ? trigger : !trigger) ? (
      <div className="popup">
        <div className="popup-inner">
          <button
            type="button"
            className="close-btn"
            onClick={ this.handleClose }
          >
            Close
          </button>
          <p>  </p>

        </div>
      </div>
    ) : '';
  }
}

Popup.propTypes = {
  trigger: PropTypes.bool.isRequired,
};

export default Popup;
