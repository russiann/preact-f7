import { h } from 'preact';
import { getInstance } from '../../instance';

const ShowWhen = ({children, theme}) => (
  <Choose>
    <When condition={theme === getInstance().theme}>
      <span>{children}</span>
    </When>
    <Otherwise>
      {null}
    </Otherwise>
  </Choose>
);

export { ShowWhen };

