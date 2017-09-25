import { h, Component } from 'preact';
import PropTypes from 'prop-types';

import { getInstance } from '../../instance';

export class PullToRefresh extends Component {
  
  instance = getInstance();

  initPullToRefresh = () => {
    setTimeout(() => {
      const currentPageContent = this.instance.views.current.$el.find('.page-current .ptr-content');
      if(currentPageContent.length === 0)
        throw new Error('TypeError: there is no .ptr-content in the current page');

      const $pullToRefresh = this.instance.ptr.create(currentPageContent);
    
      const { 
        onRefresh = function(){},
        onDone = function(){},
        onBeforeDestroy = function(){},
        onPullMove = function(){},
        onPullEnd = function(){},
        onPullStart = function(){},
      } = this.props;

      $pullToRefresh.on('refresh', (element, done) => onRefresh(done));
      $pullToRefresh.on('done', onDone);
      $pullToRefresh.on('beforeDestroy', onBeforeDestroy);
      $pullToRefresh.on('pullMove', onPullMove);
      $pullToRefresh.on('pullEnd', onPullEnd);
      $pullToRefresh.on('pullStart', onPullStart);
    });
  }

  componentDidMount(){
    this.initPullToRefresh();
  }

  render(){
    return (  
      <div className="ptr-preloader">
        <div className="preloader"></div>
        <div className="ptr-arrow"></div>
      </div>
    );
  }
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