import React from 'react';
import { Page, Navbar, Button, Segmented } from '../../dist/preact-f7';

export default () => (
  <Page>
    <Navbar title="Button" />
    <div className="block-title">Usual Buttons</div>
    <div className="block">
      <div className="row">
        <Button className='col'>Button</Button>
        <Button className='col'>Button</Button>
        <Button className='col' round>Button</Button>
      </div>
    </div>
    <div className="block-title">Fill Buttons</div>
    <div className="block">
      <div className="row">
        <Button className='col' fill>Button</Button>
        <Button className='col' fill>Button</Button>
        <Button className='col' fill round>Button</Button>
      </div>
    </div>
    <div className="block-title">Outline Buttons (MD-theme only)</div>
    <div className="block">
      <div className="row">
        <Button className='col' outline>Button</Button>
        <Button className='col' outline>Button</Button>
        <Button className='col' outline round>Button</Button>
      </div>
    </div>
    <div className="block-title">Raised Buttons (MD-theme only)</div>
    <div className="block">
      <p className="row">
        <Button className='col' raised>Button</Button>
        <Button className='col' raised fill>Button</Button>
        <Button className='col' outline raised>Button</Button>
      </p>
      <p className="row">
        <Button className='col' round raised>Button</Button>
        <Button className='col' fill round raised>Button</Button>
        <Button className='col' outline round raised>Button</Button>
      </p>
    </div>
    <div className="block-title">Segmented</div>
    <div className="block">
      <Segmented raised>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button active>Active</Button>
      </Segmented>
      <Segmented>
        <Button outline>Button</Button>
        <Button outline>Button</Button>
        <Button outline active>Active</Button>
      </Segmented>
      <Segmented raised round>
        <Button round>Button</Button>
        <Button round>Button</Button>
        <Button round active>Active</Button>
      </Segmented>
      <Segmented round>
        <Button round outline>Button</Button>
        <Button round outline>Button</Button>
        <Button round outline active>Active</Button>
      </Segmented>
    </div>

    <div className="block-title">Big Buttons</div>
    <div className="block">
      <p className="row">
        <Button className='col' big>Button</Button>
        <Button className='col' big fill>Button</Button>
      </p>
      <p className="row">
        <Button className='col' big raised>Button</Button>
        <Button className='col' big raised fill>Button</Button>
      </p>
    </div>

    <div className="block-title">Small Buttons</div>
    <div className="block">
      <p className="row">
        <Button className='col' small>Button</Button>
        <Button className='col' small outline>Button</Button>
        <Button className='col' small fill>Button</Button>
      </p>
    </div>
    <div className="block-title">Color Buttons</div>
    <div className="block">
      <p className="row">
        <Button className='col' color='red'>Red</Button>
        <Button className='col' color='pink'>Pink</Button>
        <Button className='col' color='purple'>Purple</Button>
      </p>
      <p className="row">
        <Button className='col' color='deeppurple'>Deep Purple</Button>
        <Button className='col' color='indigo'>Indigo</Button>
        <Button className='col' color='blue'>Blue</Button>
      </p>
      <p className="row">
        <Button className='col' color='lightblue'>Light Blue</Button>
        <Button className='col' color='cyan'>Cyan</Button>
        <Button className='col' color='teal'>Teal</Button>
      </p>
      <p className="row">
        <Button className='col' color='green'>Green</Button>
        <Button className='col' color='lightgreen'>Light Green</Button>
        <Button className='col' color='lime'>Lime</Button>
      </p>
      <p className="row">
        <Button className='col' color='yellow'>Yellow</Button>
        <Button className='col' color='amber'>Amber</Button>
        <Button className='col' color='orange'>Orange</Button>
      </p>
      <p className="row">
        <Button className='col' color='deeporange'>Deep Orange</Button>
        <Button className='col' color='brown'>Brown</Button>
        <Button className='col' color='gray'>Gray</Button>
      </p>
    </div>
    <div className="block-title">Color Fill Buttons</div>
    <div className="block">
      <p className="row">
        <Button className='col' color='red' fill>Red</Button>
        <Button className='col' color='pink' fill>Pink</Button>
        <Button className='col' color='purple' fill>Purple</Button>
      </p>
      <p className="row">
        <Button className='col' color='deeppurple' fill>Deep Purple</Button>
        <Button className='col' color='indigo' fill>Indigo</Button>
        <Button className='col' color='blue' fill>Blue</Button>
      </p>
      <p className="row">
        <Button className='col' color='lightblue' fill>Light Blue</Button>
        <Button className='col' color='cyan' fill>Cyan</Button>
        <Button className='col' color='teal' fill>Teal</Button>
      </p>
      <p className="row">
        <Button className='col' color='green' fill>Green</Button>
        <Button className='col' color='lightgreen' fill>Light Green</Button>
        <Button className='col' color='lime' fill>Lime</Button>            
      </p>
      <p className="row">
        <Button className='col' color='yellow' fill>Yellow</Button>
        <Button className='col' color='amber' fill>Amber</Button>
        <Button className='col' color='orange' fill>Orange</Button>
      </p>
      <p className="row">
        <Button className='col' color='deeporange' fill>Deep Orange</Button>
        <Button className='col' color='brown' fill>Brown</Button>
        <Button className='col' color='gray' fill>Gray</Button>
      </p>
    </div>
    <div className="block-title">List-Block Buttons</div>
    <div className="list inset">
      <ul>
        <li><a className="list-button item-link">List Button 2</a></li>
        <li><a className="list-button item-link">List Button 2</a></li>
        <li><a className="list-button item-link">List Button 2</a></li>
      </ul>
    </div>
    <div className="list inset">
      <ul>
        <li><a className="list-button item-link">List Button Red</a></li>
      </ul>
    </div>
  </Page>  
);
