import { h, Component } from 'preact';
import PropTypes from 'prop-types';

import { getInstance } from '../../instance';

export class PullToRefresh extends Component {
  
  instance = getInstance();

  initPullToRefresh = ($element) => {
    setTimeout(() => {
      if($element && $element.parentElement) {
        if($element.parentElement.classList.contains('ptr-content')) {
          const $pullToRefresh = this.instance.ptr.create($element.parentElement);
          
          this.configureEvents($pullToRefresh, this.props);
        } else {
          throw new Error('TypeError: there is no .ptr-content in the current page');
        }
      }    
    });
  }

  configureEvents($pullToRefresh, props) {
    const setEvent = (eventName, callback) => {
      if(callback) $pullToRefresh.on(eventName, callback);
    };

    const {  onRefresh, onDone, onBeforeDestroy, onPullMove, onPullEnd, onPullStart } = props;
    
    setEvent('refresh', (element, done) => onRefresh(done));
    setEvent('done', onDone);
    setEvent('beforeDestroy', onBeforeDestroy);
    setEvent('pullMove', onPullMove);
    setEvent('pullEnd', onPullEnd);
    setEvent('pullStart', onPullStart);
  }

  render = () => (  
    <div className="ptr-preloader" ref={this.initPullToRefresh}>
      <div className="preloader"></div>
      <div className="ptr-arrow"></div>
    </div>
  );
  
}

PullToRefresh.componentName = "PullToRefresh";

PullToRefresh.propTypes = {
  onRefresh: PropTypes.func.isRequired,
  onBeforeDestroy: PropTypes.func,
  onDone: PropTypes.func,
  onPullMove: PropTypes.func,
  onPullEnd: PropTypes.func,
  onPullStart: PropTypes.func
}