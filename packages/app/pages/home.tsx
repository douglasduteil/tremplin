import { Heading, Layout } from '@components/layout';
import * as React from 'react';
import './home.scss';

export default class HomePage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <Layout>
        <div className="title">
          <Heading text="Tremplin" />
        </div>
      </Layout>
    );
  }
}
