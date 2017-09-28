import { h } from 'preact';
import { Page, Navbar, Block, Form, Input, Icon } from '../../dist/preact-f7';

const defaultIcon = <Icon name="demo-list-icon" />;

export default () => (
  <Page>
    <Navbar title="Form Inputs" />
    
    <Block title="Full Layout / Inline Labels" />
    <Form inlineLabels>
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
      <Input media={defaultIcon} label="Range"
        type="range" defaultValue={50} min={0} max={100} step={1}
      />
      <Input type="textarea" media={defaultIcon} label="Textarea" placeholder="Bio" />
      <Input type="textarea" media={defaultIcon} label="Resizable" placeholder="Bio" resizable />
    </Form>

    <Block title="Full Layout / Stacked Labels" />
    <Form >
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
      <Input media={defaultIcon} label="Range"
        type="range" defaultValue={50} min={0} max={100} step={1}
      />
      <Input type="textarea" media={defaultIcon} label="Textarea" placeholder="Bio" />
      <Input type="textarea" media={defaultIcon} label="Resizable" placeholder="Bio" resizable />
    </Form>
    
    <Block title="Floating Labels (MD-theme only)" />
    <Form >
      <Input floatLabel type="text" media={defaultIcon} label="Name" placeholder="Your name" />
      <Input floatLabel type="password" media={defaultIcon} label="Password" placeholder="Your password" />
      <Input floatLabel type="email" media={defaultIcon} label="E-mail" placeholder="Your e-mail" />
      <Input floatLabel type="url" media={defaultIcon} label="URL" placeholder="URL" />
      <Input floatLabel type="tel" media={defaultIcon} label="Phone" placeholder="Your phone number" />
      <Input floatLabel type="textarea" media={defaultIcon} label="Bio" placeholder="Bio" resizable />
    </Form>

    <Block title="Validation + Additional Info" />
    <Form >
      <Input type="text" media={defaultIcon} label="Name" placeholder="Your name" required info='Default "Required" validation' validate />
      <Input type="text" media={defaultIcon} label="Fruit" placeholder="Type 'apple' or 'banana'" required info='Pattern validation (apple|banana)' validate pattern="apple|banana" />
      <Input type="email" media={defaultIcon} label="E-mail" placeholder="Your e-mail" required info='Default e-mail validation' validate />
      <Input type="url" media={defaultIcon} label="URL" placeholder="Your URL" required info="Default URL validation" validate/>
      <Input type="tel" media={defaultIcon} label="Phone" placeholder="Enter number" required validate pattern="[0-9]*" data-error-message="Only numbers please!" info="With custom error message" />
    </Form>

    <Block title="Icon + Input" />
    <Form >
      <Input type="text" media={defaultIcon} placeholder="Your name" />
      <Input type="password" media={defaultIcon} placeholder="Your password" />
      <Input type="email" media={defaultIcon} placeholder="Your e-mail" />
      <Input type="url" media={defaultIcon} placeholder="URL" />
    </Form>

    <Block title="Label + Input" />
    <Form >
      <Input type="text" label="Name" placeholder="Your name" />
      <Input type="password" label="Password" placeholder="Your password" />
      <Input type="email" label="E-mail" placeholder="Your e-mail" />
      <Input type="url" label="URL" placeholder="URL" />
    </Form>

    <Block title="Only Inputs" />
    <Form >
      <Input type="text" placeholder="Your name" />
      <Input type="password"  placeholder="Your password" />
      <Input type="email" placeholder="Your e-mail" />
      <Input type="url" placeholder="URL" />
    </Form>

    <Block title="Inputs + Additional Info" />
    <Form >
      <Input type="text" placeholder="Your name" info="Full name please" />
      <Input type="password"  placeholder="Your password" info="8 characters minimum" />
      <Input type="email" placeholder="Your e-mail" info="Your work e-mail address" />
      <Input type="url" placeholder="URL" info="Your website URL" />
    </Form>

    <Block title="Only Inputs Inset" />
    <Form inset >
      <Input type="text" placeholder="Your name" />
      <Input type="password"  placeholder="Your password" />
      <Input type="email" placeholder="Your e-mail" />
      <Input type="url" placeholder="URL" />
    </Form>

  </Page>
);
