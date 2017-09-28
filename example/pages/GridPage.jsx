import { h } from 'preact';
import { Page, Navbar, Block, GridRow, GridCol } from '../../dist/preact-f7';

export default () => (
  <Page>
    <Navbar title="Grid / Layout" />
    <div className='grid-demo'>
      <Block>
        <p>Columns within a row are automatically set to have equal width. Otherwise you can define your column with pourcentage of screen you want.</p>
      </Block>
      <Block title='Columns with gutter' />
      <Block>
        <GridRow>
          <GridCol>50% (.col)</GridCol>
          <GridCol>50% (.col)</GridCol>
        </GridRow>

        <GridRow>
          <GridCol>25% (.col)</GridCol>
          <GridCol>25% (.col)</GridCol>
          <GridCol>25% (.col)</GridCol>
          <GridCol>25% (.col)</GridCol>
        </GridRow>

        <GridRow>
          <GridCol>33% (.col)</GridCol>
          <GridCol>33% (.col)</GridCol>
          <GridCol>33% (.col)</GridCol>
        </GridRow>
        
        <GridRow>
          <GridCol>20% (.col)</GridCol>
          <GridCol>20% (.col)</GridCol>
          <GridCol>20% (.col)</GridCol>
          <GridCol>20% (.col)</GridCol>
          <GridCol>20% (.col)</GridCol>
        </GridRow>
        
        <GridRow>
          <GridCol width={33}>33% (.col-33)</GridCol>
          <GridCol width={66}>66% (.col-66)</GridCol>
        </GridRow>

        <GridRow>
          <GridCol width={25}>25% (.col-25)</GridCol>
          <GridCol width={25}>25% (.col-25)</GridCol>
          <GridCol width={50}>50% (.col-50)</GridCol>
        </GridRow>
        
        <GridRow>
          <GridCol width={75}>75% (.col-75)</GridCol>
          <GridCol width={25}>25% (.col-25)</GridCol>
        </GridRow>
        
        <GridRow>
          <GridCol width={80}>80% (.col-80)</GridCol>
          <GridCol width={20}>20% (.col-20)</GridCol>
        </GridRow>
        
      </Block>

      <Block title='No gutter between columns' />
      <Block>
        <GridRow noGap>
          <GridCol>50% (.col)</GridCol>
          <GridCol>50% (.col)</GridCol>
        </GridRow>

        <GridRow noGap>
          <GridCol>25% (.col)</GridCol>
          <GridCol>25% (.col)</GridCol>
          <GridCol>25% (.col)</GridCol>
          <GridCol>25% (.col)</GridCol>
        </GridRow>

        <GridRow noGap>
          <GridCol>33% (.col)</GridCol>
          <GridCol>33% (.col)</GridCol>
          <GridCol>33% (.col)</GridCol>
        </GridRow>
        
        <GridRow noGap>
          <GridCol>20% (.col)</GridCol>
          <GridCol>20% (.col)</GridCol>
          <GridCol>20% (.col)</GridCol>
          <GridCol>20% (.col)</GridCol>
          <GridCol>20% (.col)</GridCol>
        </GridRow>
        
        <GridRow noGap>
          <GridCol width={33}>33% (.col-33)</GridCol>
          <GridCol width={66}>66% (.col-66)</GridCol>
        </GridRow>

        <GridRow noGap>
          <GridCol width={25}>25% (.col-25)</GridCol>
          <GridCol width={25}>25% (.col-25)</GridCol>
          <GridCol width={50}>50% (.col-50)</GridCol>
        </GridRow>
        
        <GridRow noGap>
          <GridCol width={75}>75% (.col-75)</GridCol>
          <GridCol width={25}>25% (.col-25)</GridCol>
        </GridRow>
        
        <GridRow noGap>
          <GridCol width={80}>80% (.col-80)</GridCol>
          <GridCol width={20}>20% (.col-20)</GridCol>
        </GridRow>
      </Block>

      <Block title='Nested' />
      <Block>
        <GridRow>
          <GridCol>50% (.col)
            <GridRow>
              <GridCol>50% (.col)</GridCol>
              <GridCol>50% (.col)</GridCol>
            </GridRow>
          </GridCol>
          <GridCol>50% (.col)
            <GridRow>
              <GridCol width={33}>33% (.col-33)</GridCol>
              <GridCol width={66}>66% (.col-66)</GridCol>
            </GridRow>
          </GridCol>
        </GridRow>
      </Block>

      <Block title='Responsive Grid' />
      <Block>
        <p>Grid cells have different size on Phone/Tablet</p>
        <GridRow>
          <GridCol width={100} tablet={50}>.col-100.tablet-50</GridCol>
          <GridCol width={100} tablet={50}>.col-100.tablet-50</GridCol>
        </GridRow>
        <GridRow>
          <GridCol width={50} tablet={25}>.col-50.tablet-25</GridCol>
          <GridCol width={50} tablet={25}>.col-50.tablet-25</GridCol>
          <GridCol width={50} tablet={25}>.col-50.tablet-25</GridCol>
          <GridCol width={50} tablet={25}>.col-50.tablet-25</GridCol>
        </GridRow>
        <GridRow>
          <GridCol width={100} tablet={40}>.col-100.tablet-40</GridCol>
          <GridCol width={50} tablet={60}>.col-50.tablet-60</GridCol>
          <GridCol width={50} tablet={66}>.col-50.tablet-66</GridCol>
          <GridCol width={100} tablet={33}>.col-100.tablet-33</GridCol>
        </GridRow>
      </Block>
    </div>
  </Page>
);