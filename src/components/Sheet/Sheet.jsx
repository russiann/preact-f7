import { h, Component } from 'preact';
import PropTypes from 'prop-types';
import render from 'preact-render-to-string';
import { createClassName } from 'create-classname';

import { getInstance } from '../../instance.js';

const sheetClass = createClassName('sheet-modal');

export class Sheet extends Component {
  instance = getInstance();
  $sheet;

  renderToString(element) {
    if (typeof element === 'string') return element;
    return render(element);
  }

  createSheet(onClose) {
    return this.instance.sheet.create({ content: this.base.outerHTML, on: { close: onClose } });
  }

  componentWillUpdate({ active, onClose }) {
    const onCloseCallback = () => {
      this.$sheet = null;
      onClose();
    };

    if(active && !this.$sheet) {
      this.$sheet = this.createSheet(onCloseCallback);
      this.$sheet.open();
    }
  }

  render() {
    return (
      <div className={sheetClass(this.props)} style={this.props.style}>
        {this.props.children.map(child => {
          if (child && child.nodeName && child.nodeName.componentName === 'SheetToolbar') return child.children;
          return;
        })}
        <div className="sheet-modal-inner">
          <div className="page-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Sheet.componentName = 'Sheet';

Sheet.propTypes = {
  active: PropTypes.bool,
  onClose: PropTypes.func
};
