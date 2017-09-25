import { h } from 'preact';
import { Page, Navbar, Block } from '../../dist/preact-f7';

export default () => (
  <Page hideNavbarOnScroll>
    <Navbar title="Hide Navbar On Scroll"/>
    <Block strong>
      <p>Navbar will be hidden if you scroll bottom</p>
    </Block>
    <Block>
      <For each="item" of={[0,1,2,3,4,5,6,7,8,9]}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos maxime incidunt id ab culpa ipsa omnis eos, vel excepturi officiis neque illum perferendis dolorum magnam rerum natus dolore nulla ex.</p>
        <p>Eum dolore, amet enim quaerat omnis. Modi minus voluptatum quam veritatis assumenda, eligendi minima dolore in autem delectus sequi accusantium? Cupiditate praesentium autem eius, esse ratione consequuntur dolor minus error.</p>
        <p>Repellendus ipsa sint quisquam delectus dolore quidem odio, praesentium, sequi temporibus amet architecto? Commodi molestiae, in repellat fugit! Laudantium, fuga quia officiis error. Provident inventore iusto quas iure, expedita optio.</p>
        <p>Eligendi recusandae eos sed alias delectus reprehenderit quaerat modi dolor commodi beatae temporibus nisi ullam ut, quae, animi esse in officia nesciunt sequi amet repellendus? Maiores quos provident nisi expedita.</p>
      </For>   
    </Block>
  </Page>
);
