import React from 'react';
import { Page, Navbar, Block, BlockHeader, BlockFooter } from '../../dist/preact-f7';

export default () => (
  <Page>
    <Navbar title="Content Block" />
      <p>This paragraph is outside of content block. Not cool, but useful for any custom elements with custom styling.</p>

      <Block>
        <p>Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis. </p>
      </Block>

      <Block strong>
        <p>Here comes another text block with additional "block-strong" class. Praesent nec imperdiet diam. Maecenas vel lectus porttitor, consectetur magna nec, viverra sem. Aliquam sed risus dolor. Morbi tincidunt ut libero id sodales. Integer blandit varius nisi quis consectetur. </p>
      </Block>

      <Block title>Block title</Block>
      <Block>
        <p>Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis. </p>
      </Block>

      <Block title>Another ultra long content block title</Block>
      <Block strong>
        <p>Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis. </p>
      </Block>

      <Block title>Inset</Block>
      <Block strong inset>
        <p>Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis. </p>
      </Block>

      <Block title>Tablet Inset</Block>
      <Block strong tabletInset>
        <p>Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis. </p>
      </Block>

      <Block title>With Header & Footer</Block>
      <Block header="Block Header" footer="Block Footer">
        <p>Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis. </p>
      </Block>

      <BlockHeader>Block Header</BlockHeader>
      <Block>
        <p>Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis. </p>
      </Block>
      <BlockFooter>Block Footer</BlockFooter>

      <Block strong header="Block Header" footer="Block Footer" >
        <p>Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis. </p>
      </Block>

      <BlockHeader>Block Header</BlockHeader>
      <Block strong>
        <p>Here comes paragraph within content block. Donec et nulla auctor massa pharetra adipiscing ut sit amet sem. Suspendisse molestie velit vitae mattis tincidunt. Ut sit amet quam mollis, vulputate turpis vel, sagittis felis. </p>
      </Block>
      <BlockFooter>Block Footer</BlockFooter>
  </Page>
);
