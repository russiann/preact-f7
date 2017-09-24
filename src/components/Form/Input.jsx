import { h } from 'preact';
import InputText from './Inputs/InputText';
import Select from './Inputs/Select';
import Range from './Inputs/Range';
// import { createClassName } from 'create-classname';

// const badgeClass = createClassName('badge', [{ name: 'color', className: ({ color }) => `color-${color}` }]);
const inputTextTypes = ['text','password','email','url','tel','date','datetime-local'];

export const Input = (props) => (
  <Choose>
    <When condition={inputTextTypes.includes(props.type)} >
      <InputText {...props} />
    </When>
    <When condition={props.type === 'select'} >
      <Select {...props} />
    </When>
    <When condition={props.type === 'range'} >
      <Range {...props} />
    </When>
  </Choose>
);
