import { h } from 'preact';

const SubNavbar = ({children, title}) => (
  <div className="subnavbar">
    <div className="subnavbar-inner">
      <Choose>
        <When condition={title}>
          <div className="title" >{title}</div>
        </When>
        <Otherwise>
          {children}
        </Otherwise>
      </Choose>
    </div>
  </div>
);

export { SubNavbar };

