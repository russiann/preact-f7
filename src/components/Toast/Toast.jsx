import h, { Component } from 'preact';
import PropTypes from 'prop-types';
import render from 'preact-render-to-string';

import { getInstance } from '../../instance.js';

export class Toast extends Component {
  instance = getInstance();
  $toast;

  renderToString(element) {
    if(typeof element === 'string') return element;
    return render(element);
  }

  createToast({ message = '', position = 'bottom', buttonColor = 'white', 
    time = 2000, icon, buttonText, onClose, className }) {

    const configuration = {
      position, 
      text: message, 
      icon: this.renderToString(icon), 
      cssClass: className,
      closeButton: !!buttonText,
      closeButtonText: buttonText,
      closeButtonColor: buttonColor,
      closeTimeout: time,
      on: { close: onClose }
    };
    
    return this.instance.toast.create(configuration);
  }

  componentWillUpdate(props) {
    if(props.active) {
      this.$toast = this.createToast(props);
      this.$toast.open();
    } 
  }

  render = () => null;
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  position: PropTypes.string,
  time: PropTypes.number,
  icon: PropTypes.any,
  buttonColor: PropTypes.string,
  buttonText: PropTypes.string,
  onClose: PropTypes.func
}