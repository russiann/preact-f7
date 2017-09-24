import { h, Component } from 'preact';

import { setInstance } from './instance';
import { getRouteConfiguration } from './router';

/**
|--------------------------------------------------
| Default Framework7 Params
|--------------------------------------------------
*/

const defaultF7Params = {
  root: '#f7-root',
  theme: 'auto'
};

/**
|--------------------------------------------------
| Component
|--------------------------------------------------
*/

class Framework7 extends Component {

  componentDidMount() {
    const { params, F7 } = this.props;
    const routes = getRouteConfiguration();

    const f7params = {...defaultF7Params, ...params, routes};

    console.log('before instance');
    const instance = new F7(f7params);
    console.log('after instance');

    setInstance(instance);
  }

  render() {
    return (
      <div id="f7-root">
        {this.props.children}
      </div>
    )
  }
}

export { Framework7 };
