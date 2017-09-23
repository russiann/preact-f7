import { h, Component } from 'preact';
// import { createClassName } from 'create-classname';

// const navbarInnerClasses = createClassName('navbar-inner', ['sliding'])

const Navbar = ({children, title, subtitle, left, right, disableBackButton}) => (
  <div className="navbar">
    <div className="navbar-inner sliding">

      <Choose>
        <When condition={ left }>
          <div className="left">{left}</div>
        </When>

        <When condition={ !disableBackButton }>
          <div className="left">
            <a className="link back">
              <i className="icon icon-back"></i>
              <span className="ios-only">Back</span>
            </a>
          </div>
        </When>
      </Choose>

      <div className="title" >
        {title}
        <If condition={subtitle}>
          <div className="subtitle" >{subtitle}</div>
        </If>
      </div>

      <If condition={ right }>
        <div className="right">{right}</div>
      </If>

      {children}

    </div>
  </div>
);

export { Navbar };

