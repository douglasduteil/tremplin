import { Heading, Layout } from '@components/layout';
import * as React from 'react';

export default class HomePage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <Layout>
        <div>
          <Heading text="Tremplin" />
        </div>
      </Layout>
    );
  }
}
