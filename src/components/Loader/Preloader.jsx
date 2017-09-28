import { h, Component } from 'preact';
import PropTypes from 'prop-types';

import { getInstance } from '../../instance';
import { createClassName } from 'create-classname';

const preloaderClass = createClassName('preloader', [
  'big:preloader-big',
  { name: 'color', className: ({ color }) => `color-${color}` },
]);

export class Preloader extends Component {
  
  instance = getInstance();
  show = null;

  componentWillUpdate({ active, dialog = false,  text = 'Loading' }) {
    if(!dialog){
      if(active) this.instance.preloader.show();
      if(this.show) this.instance.preloader.hide();
    }

    if(dialog){
      if(active) this.instance.dialog.preloader(text);
      if(this.show) this.instance.dialog.close();
    }

    this.show = active;
  }


  render() {
    const { ...props } = this.props;

    return (
      <If condition={props.active === undefined}>
        <div className={preloaderClass(props)} {...props}></div>
      </If>
    );
  }
}

Preloader.propTypes = {
  active: PropTypes.bool,
  dialog: PropTypes.bool,
  text: PropTypes.string
}