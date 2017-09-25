import { h } from 'preact';
import { Page, Navbar, Toolbar, Block, Tabs, Tab, TabLink } from '../../dist/preact-f7';

const HideToolbarOnScroll = () => (
  <Page hideToolbarOnScroll>
        
    <Navbar title="Hide Toolbar On Scroll"/>
    
    <Toolbar bottom={true}>
      <a className="link">Left Link</a>
      <a className="link">Right Link</a>
    </Toolbar>
  
    <Block strong>
      <p>Toolbar will be hidden if you scroll bottom</p>
    </Block>

    <Block>
      <For each="item" of={[0,1,2,3,4,5,6,7,8,9]}>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos maxime incidunt id ab culpa ipsa omnis eos, vel excepturi officiis neque illum perferendis dolorum magnam rerum natus dolore nulla ex.</p>
          <p>Eum dolore, amet enim quaerat omnis. Modi minus voluptatum quam veritatis assumenda, eligendi minima dolore in autem delectus sequi accusantium? Cupiditate praesentium autem eius, esse ratione consequuntur dolor minus error.</p>
          <p>Repellendus ipsa sint quisquam delectus dolore quidem odio, praesentium, sequi temporibus amet architecto? Commodi molestiae, in repellat fugit! Laudantium, fuga quia officiis error. Provident inventore iusto quas iure, expedita optio.</p>
          <p>Eligendi recusandae eos sed alias delectus reprehenderit quaerat modi dolor commodi beatae temporibus nisi ullam ut, quae, animi esse in officia nesciunt sequi amet repellendus? Maiores quos provident nisi expedita.</p>
        </div>
      </For>   
    </Block>

  </Page>
);


export default HideToolbarOnScroll;
