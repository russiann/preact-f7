import { h } from 'preact';
import { Page, Navbar, Chip, Block } from '../../dist/preact-f7';

export default () => (
  <Page>
    <Navbar title="Chips" />
    
    <Block title='Chips With Text' /> 
    <Block strong>
      <Chip label='Example Chip' />
      <Chip label='Another Chip'/>
      <Chip label='One More Chip' />
      <Chip label='Fourth Chip' />
      <Chip label='Last One' />
    </Block>

    <Block tilte='Icon Chips' /> 
    <Block strong>
      <Chip label='Add Contact' backgroundColorMedia='blue'>
        <i className="icon f7-icons ios-only">add_round</i>
        <i className="icon material-icons md-only">add_circle</i>
      </Chip>
      <Chip label='London' backgroundColorMedia='purple'>
        <i className="icon f7-icons ios-only">compass</i>
        <i className="icon material-icons md-only">location_on</i>
      </Chip>
      <Chip label='John Doe' backgroundColorMedia='red'>
        <i className="icon f7-icons ios-only">person</i>
        <i className="icon material-icons md-only">person</i>
      </Chip>
    </Block>

    <Block title='Contact Chips' /> 
    <Block strong>
      <Chip label='Jone Doe'>
        <img  alt="image1" src="http://lorempixel.com/100/100/people/9/"/>
      </Chip>
      <Chip label='John Doe'>
        <img  alt="image3" src="http://lorempixel.com/100/100/people/3/"/>
      </Chip>
      <Chip label='Adam Smith'>
        <img  alt="image4" src="http://lorempixel.com/100/100/people/7/"/>
      </Chip>
      <Chip label='Jennifer' backgroundColorMedia='pink'>J</Chip>
      <Chip label='Chris' backgroundColorMedia='yellow' textColorMedia='black'>C</Chip>
      <Chip label='Kate' backgroundColorMedia='red'>K</Chip>
    </Block>
    
    <Block title='Deletable Chips / Tags'/> 
    <Block strong>
      <Chip label='Example Chip' onClickDelete={() => console.log('Click Delete Chip')} />
      <Chip label='Chris' onClickDelete={() => console.log('Click Delete Chip')} backgroundColorMedia='orange' textColorMedia='black'>C</Chip>
      <Chip label='Jane Doe' onClickDelete={() => console.log('Click Delete Chip')}>
        <img  alt="image5" src="http://lorempixel.com/100/100/people/9/"/>
      </Chip>
      <Chip label='One More Chip' onClickDelete={() => console.log('Click Delete Chip')} />
      <Chip label='Jannife' onClickDelete={() => console.log('Click Delete Chip')} backgroundColorMedia='pink'>J</Chip>
      <Chip label='Adam Smith' onClickDelete={() => console.log('Click Delete Chip')}>
        <img  alt="image6" src="http://lorempixel.com/100/100/people/7/"/>
      </Chip>
      <Chip onClickDelete={() => console.log('Click Delete Chip')}>
        <img  alt="image7" src="http://lorempixel.com/100/100/people/7/"/>
      </Chip>
    </Block>
    
    <Block title='Color Chips' />
    <Block strong>
      <Chip color='red' label='Red Chip'></Chip>
      <Chip color='green' label='Green Chip'></Chip>
      <Chip color='blue' label='Blue Chip'></Chip>
      <Chip color='orange' label='Orange Chip'></Chip>
      <Chip color='pink' label='Pink Chip'></Chip>
    </Block>
  </Page>
);