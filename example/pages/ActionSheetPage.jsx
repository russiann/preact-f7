import { h, Component } from 'preact';
import { Page, Navbar, Block, GridCol, Button, ActionSheet, ActionButton, ActionGroup } from '../../dist/preact-f7';

export default class ActionSheetPage extends Component {
  state = {
    action1: false,
    action2: false,
    action3: false,
    action4: false
  };

  render() {
    return (
      <Page>
        <Navbar title="Action Sheet" />
        <Block row>
          <GridCol>
            <Button raised onClick={() => this.setState({ action1: true })}>One group</Button>
            <ActionSheet
              active={this.state.action1}
              onClose={() => this.setState({ action1: false })}
              config={[
                { text: 'Do something', label: true },
                { text: 'Button 1', bold: true },
                { text: 'Button 2' },
                { text: 'Cancel', color: 'red' }
              ]}
            />
          </GridCol>
          <GridCol>
            <Button raised onClick={() => this.setState({ action2: true })}>Two groups</Button>
            <ActionSheet active={this.state.action2} onClose={() => this.setState({ action2: false })}>
              <ActionGroup>
                <ActionButton label text='Do something' />
                <ActionButton bold text='Button 1' />
                <ActionButton text='Button 2' />
              </ActionGroup>
              <ActionGroup>
                <ActionButton text='Cancel' color='red' />
              </ActionGroup>
            </ActionSheet>
          </GridCol>
        </Block>
        <Block>
          <Button raised onClick={() => this.setState({ action3: true })}>Action Grid</Button>
          <ActionSheet grid active={this.state.action3} onClose={() => this.setState({ action3: false })}>
            <ActionGroup>
              <ActionButton
                text='Button 1'
                icon={<img src="http://lorempixel.com/96/96/people/1" alt='1' width="48" />}
              />
              <ActionButton
                text='Button 2'
                icon={<img src="http://lorempixel.com/96/96/people/2" alt='2' width="48" />}
              />
              <ActionButton
                text='Button 3'
                icon={<img src="http://lorempixel.com/96/96/people/3" alt='3' width="48" />}
              />
            </ActionGroup>
            <ActionGroup>
              <ActionButton
                text='Button 1'
                icon={<img src="http://lorempixel.com/96/96/people/4" alt='4' width="48" />}
              />
              <ActionButton
                text='Button 2'
                icon={<img src="http://lorempixel.com/96/96/people/5" alt='5' width="48" />}
              />
              <ActionButton
                text='Button 3'
                icon={<img src="http://lorempixel.com/96/96/people/6" alt='6' width="48" />}
              />
            </ActionGroup>
          </ActionSheet>
        </Block>
        <Block title='Action Sheet To Popover' />
        <Block strong>
          <p>Action Sheet can be automatically converted to Popover (for tablets). This button will open Popover on tablets and Action Sheet on phones:
            <a
              style={{ display: 'inline-block' }}
              className='button button-to-popover'
              onClick={() => this.setState({ action4: true })}
            >
              Actions
            </a>
            <ActionSheet popover='button-to-popover' active={this.state.action4} onClose={() => this.setState({ action4: false })}>
              <ActionButton label text='Do something' />
              <ActionButton bold text='Button 1' />
              <ActionButton text='Button 2' />
              <ActionButton text='Cancel' color='red' />
            </ActionSheet>
          </p>
        </Block>
      </Page>
    );
  }
}
