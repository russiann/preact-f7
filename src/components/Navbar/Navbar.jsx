import { h, Component } from 'preact';
// import { createClassName } from 'create-classname';

// const navbarInnerClasses = createClassName('navbar-inner', ['sliding'])

const Navbar = ({children, title, subtitle, left, right, disableBackButton, leftOpenModal, rightOpenModal}) => (
  <div className="navbar">
    <div className="navbar-inner sliding">

      <Choose>
        <When condition={ left }>

          <Choose>
            <When condition={leftOpenModal && typeof leftOpenModal === 'string'}>
              <div className="left panel-open" data-panel={leftOpenModal}>{left}</div>
            </When>
            <Otherwise>
              <div className="left">{left}</div>
            </Otherwise>
          </Choose>
          
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

        <Choose>
          <When condition={rightOpenModal && typeof rightOpenModal === 'string'}>
            <div className="right panel-open" data-panel={rightOpenModal}>{right}</div>
          </When>
          <Otherwise>
            <div className="right">{right}</div>
          </Otherwise>
        </Choose>
        
      </If>

      {children}

    </div>
  </div>
);

Navbar.componentName = "Navbar";

export { Navbar };

