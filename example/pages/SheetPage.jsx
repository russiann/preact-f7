import { h, Component } from 'preact';
import { Page, Navbar, Block, GridRow, Button, Icon } from '../../dist/preact-f7';
import { Sheet, SheetToolbar } from '../../dist/preact-f7';

export default class SheetPage extends Component {
  state = { active: false };

  render() {
    return (
      <Page>
        <Navbar title='Sheet Modal' />
        <Block>
          <p>Sheet Modals slide up from the bottom of the screen to reveal more content. Such modals allow to create custom overlays with custom content.</p>
          <Button raised onClick={() => this.setState({ active: true })}>Open Sheet</Button>
        </Block>
        <Sheet active={this.state.active} onClose={() => this.setState({ active: false })}>
          <SheetToolbar
            left='Left'
            right={<Icon closeSheet ifIos="f7:close" ifMaterial="material:close" />}
          />
          <div class="block">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ducimus dolorum ipsa aliquid accusamus perferendis laboriosam delectus numquam minima animi, libero illo in tempora harum sequi corporis alias ex adipisci.</p>
            <p>Sunt magni enim saepe quasi aspernatur delectus consectetur fugiat necessitatibus qui sed, similique quis facere tempora, laudantium quae expedita ea, aperiam dolores. Aut deserunt soluta alias magnam. Consequatur, nisi, enim.</p>
            <p>Eaque maiores ducimus, impedit unde culpa qui, explicabo accusamus, non vero corporis voluptatibus similique odit ab. Quaerat quasi consectetur quidem libero? Repudiandae adipisci vel voluptatum, autem libero minus dignissimos repellat.</p>
            <p>Iusto, est corrupti! Totam minus voluptas natus esse possimus nobis, delectus veniam expedita sapiente ut cum reprehenderit aliquid odio amet praesentium vero temporibus obcaecati beatae aspernatur incidunt, perferendis voluptates doloribus?</p>
            <p>Illum id laborum tempore, doloribus culpa labore ex iusto odit. Quibusdam consequuntur totam nam obcaecati, enim cumque nobis, accusamus, quos voluptates, voluptatibus sapiente repellendus nesciunt praesentium velit ipsa illo iusto.</p>
          </div>
        </Sheet>
      </Page>
    );
  }
}