import { Component } from 'preact';
import PropTypes from 'prop-types';
import render from 'preact-render-to-string';

import { getInstance } from '../../instance.js';

export const ActionGroup = ({ children }) => children;
export const ActionButton = ({ text, label, bold, color, icon, bg, disabled, onClick }) => null;

export class ActionSheet extends Component {
  instance = getInstance();
  $action;

  createAction(buttons, popover, grid) {
    return this.instance.actions.create({ buttons, targetEl: this.instance.$(`.${popover}`), grid });
  }

  renderToString(element) {
    if (typeof element === 'string') return element;
    return render(element);
  }

  configure(children) {
    return children.map(child => {
      let icon;

      if (child.nodeName.name === 'ActionGroup') {
        if (!Array.isArray(child.children)) {
          icon = this.renderToString(child.children.attributes.icon);
          return [{ ...child.children.attributes, icon }];
        }

        return child.children.map(grandchild => {
          icon = this.renderToString(grandchild.attributes.icon);
          return { ...grandchild.attributes, icon };
        });
      }

      icon = this.renderToString(child.attributes.icon);
      return { ...child.attributes, icon };
    });
  }

  componentWillUpdate({ active, config, children, onClose, popover, grid }) {
    if (active) {
      if (config) {
        this.$action = this.createAction(config, popover, grid);
      } else {
        this.$action = this.createAction(this.configure(children), popover, grid);
      }

      this.$action.open();
      this.$action.on('close', onClose);
    } else if (this.$action) {
      this.$action.close();
      this.$action = null;
    }
  }

  render = () => null;
}

ActionSheet.propTypes = {
  active: PropTypes.bool,
  onClose: PropTypes.func,
  popover: PropTypes.string
}

ActionButton.propTypes = {
  text: PropTypes.string,
  labeled: PropTypes.bool,
  bold: PropTypes.bool,
  color: PropTypes.string,
  icon: PropTypes.any
}