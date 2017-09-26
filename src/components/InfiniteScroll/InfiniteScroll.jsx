import { h, Component } from 'preact';
import { getInstance } from '../../instance';

export class InfiniteScroll extends Component {
  instance = getInstance()

  initInifiteScroll = ($element) => {
    setTimeout(() => {
      if($element && $element.parentElement) {
        if($element.parentElement.classList.contains('infinite-scroll-content')) {
          const $infiniteScroll = this.instance.$($element.parentElement);
          const { onInfinite = function(){} } = this.props;
          $infiniteScroll.on('infinite', onInfinite);
        } else {
          throw new Error('TypeError: there is no .infinite-scroll-content in the current page');
        }
      }
    });
  }

  render = () => (<div className="preloader infinite-scroll-preloader" ref={this.initInifiteScroll}></div>); 
}

InfiniteScroll.componentName = 'InfiniteScroll';