import React from 'react';
import { Page, Navbar, Card, CardHeader, CardContent, CardFooter } from '../../dist/preact-f7';
import { Block, List, ListItem } from '../../dist/preact-f7';

export default () => (
  <Page>
    <Navbar title="Card" />
    <Block>
      <p>Cards are a great way to contain and organize your information, especially when combined with List Views. Cards can contain unique related data, like for example photos, text or links about a particular subject. Cards are typically an entry point to more complex and detailed information.</p>
    </Block>
    <Block title>Simple Cards</Block>
    <Card>
      <CardContent padding>This is a simple card with plain text, but cards can also contain their own header, footer, list view, image, or any other element.</CardContent>
    </Card>
    <Card>
      <CardHeader>Card header</CardHeader>
      <CardContent padding>Card with header and footer. Card headers are used to display card titles and footers for additional information or just for custom actions.</CardContent>
      <CardFooter>Card Footer</CardFooter>
    </Card>
    <Card>
      <CardContent padding>Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet. Mauris aliquet magna justo. </CardContent>
    </Card>
    <Block title>Styled Cards</Block>
    <Card className='demo-card-header-pic'>
      <CardHeader
        noBorder
        valign="bottom"
        style={{backgroundImage: 'url(http://lorempixel.com/1000/600/nature/3/)'}}
      >
        Journey To Mountains
      </CardHeader>
      <CardContent padding>
        <p className="date">Posted on January 21, 2015</p>
        <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>
      </CardContent>
      <CardFooter>
        <a className="link">Like</a>
        <a className="link">Read more</a>
      </CardFooter>
    </Card>
    <Card className='demo-card-header-pic'>
      <CardHeader
        noBorder
        style={{ backgroundImage: 'url(http://lorempixel.com/1000/600/people/6/)' }}
        valign="bottom"
      >
        Lorem Ipsum
      </CardHeader>
      <CardContent padding>
        <p className="date">Posted on January 21, 2015</p>
        <p>Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit...</p>
      </CardContent>
      <CardFooter>
        <a className="link">Like</a>
        <a className="link">Read more</a>
      </CardFooter>
    </Card>
    <Block title>Facebook Cards</Block>
    <Card className='demo-facebook-card'>
      <CardHeader noBorder>
        <div className="demo-facebook-avatar">
          <img alt="image1" src="http://lorempixel.com/68/68/people/1/" width="34" height="34" />
        </div>
        <div className="demo-facebook-name">John Doe</div>
        <div className="demo-facebook-date">Monday at 3:47 PM</div>
      </CardHeader>
      <CardContent>
        <img alt="image2" src="http://lorempixel.com/1000/700/nature/8/" width="100%" />
      </CardContent>
      <CardFooter noBorder>
        <a className="link">Like</a>
        <a className="link">Comment</a>
        <a className="link">Share</a>
      </CardFooter>
    </Card>
    <Card className='demo-facebook-card'>
      <CardHeader>
        <div className="demo-facebook-avatar">
          <img alt="image3" src="http://lorempixel.com/68/68/people/1/" width="34" height="34" />
        </div>
        <div className="demo-facebook-name">John Doe</div>
        <div className="demo-facebook-date">Monday at 2:15 PM</div>
      </CardHeader>
      <CardContent padding>
        <p>What a nice photo i took yesterday!</p>
        <img alt="image4" src="http://lorempixel.com/1000/700/nature/8/" width="100%" />
        <p className="likes">Likes: 112 &nbsp;&nbsp; Comments: 43</p>
      </CardContent>
      <CardFooter>
        <a className="link">Like</a>
        <a className="link">Comment</a>
        <a className="link">Share</a>
      </CardFooter>
    </Card>
    <Block title>Cards With List View</Block>
    <Card>
      <CardContent>
        <List links>
          <ListItem link='#'>Link 1</ListItem>
          <ListItem link='#'>Link 2</ListItem>
          <ListItem link='#'>Link 3</ListItem>
          <ListItem link='#'>Link 4</ListItem>
          <ListItem link='#'>Link 5</ListItem>
        </List>
      </CardContent>
    </Card>
    <Card>
      <CardHeader>New Releases:</CardHeader>
      <CardContent>
        <List mediaList>
          <ListItem 
            media={<img alt="image4" src="http://lorempixel.com/88/88/fashion/4" width="44" />}
            subtitle='Beatles'
            title='Yellow Submarine'
          />
          <ListItem 
            media={<img alt="image5" src="http://lorempixel.com/88/88/fashion/5" width="44" />}
            subtitle='Queen'
            title='Don t Stop Me Now'
          />
          <ListItem 
            media={<img alt="image6" src="http://lorempixel.com/88/88/fashion/6" width="44" />}
            subtitle='Michael Jackson'
            title='Billie Jean'
          />
        </List>
      </CardContent>
      <CardFooter>
        <span>January 20, 2015</span>
        <span>5 comments</span>
      </CardFooter>
    </Card>
  </Page>
);
