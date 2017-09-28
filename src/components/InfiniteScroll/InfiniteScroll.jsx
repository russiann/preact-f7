import { h, Component } from 'preact';

import { Preloader } from '../Loader/Preloader';
import { getInstance } from '../../instance';

export class InfiniteScroll extends Component {
  instance = getInstance()

  initInifiteScroll = ($element) => {
    setTimeout(() => {
      if($element && $element.parentElement) {
        if($element.parentElement.classList.contains('infinite-scroll-content')) {
          const $infiniteScroll = this.instance.$($element.parentElement);
          this.instance.infiniteScroll.create($infiniteScroll);
          
          const { onInfinite } = this.props;
          
          $infiniteScroll.off('infinite');
          if(onInfinite) $infiniteScroll.on('infinite', onInfinite);
        } else {
          throw new Error('TypeError: there is no .infinite-scroll-content in the current page');
        }
      }
    });
  }

  render = () => (
    <div ref={this.initInifiteScroll}>
      <Preloader className='infinite-scroll-preloader' color={this.props.color} big={this.props.big} />
    </div>
  ); 
}

InfiniteScroll.componentName = 'InfiniteScroll';