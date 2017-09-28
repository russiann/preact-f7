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

    f7params.on = {
      init() {
        setInstance(this);
      }
    };

    new F7(f7params);

  }

  render() {
    return (
      <div id="f7-root" className={this.props.colorTheme}>
        {this.props.children}
      </div>
    )
  }
}

export { Framework7 };
