import { h, Component } from 'preact';

class Router extends Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

export { Router };