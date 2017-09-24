import { h } from 'preact';
import { Page, Navbar, Block, Form, Input, Icon } from '../../dist/preact-f7';

const defaultIcon = <Icon name="demo-list-icon" />;

export default () => (
  <Page>
    <Navbar title="Form Inputs" />
    
    <Block title="Full Layout / Inline Labels" />

    <Form>
      <Input type="text" media={defaultIcon} label="Name" placeholder="Your name" />
      <Input type="password" media={defaultIcon} label="Password" placeholder="Your password" />
      <Input type="email" media={defaultIcon} label="E-mail" placeholder="Your e-mail" />
      <Input type="url" media={defaultIcon} label="URL" placeholder="URL" />
      <Input type="tel" media={defaultIcon} label="Phone" placeholder="Your phone number" />
      <Input type="select" media={defaultIcon} label="Gender" placeholder="Please choose...">
        <option value="1">Male</option>
        <option value="1">Female</option>
      </Input>
      <Input type="date" media={defaultIcon} label="Birthday" defaultValue="2014-04-30" placeholder="Your phone number" />
      <Input type="datetime-local" media={defaultIcon} label="Date time" />
      <Input type="range" defaultValue={50} min={0} max={100} step={1} />
    </Form>

  </Page>
);
