import { Heading, PageLayout,  } from '@components/layout';
import * as React from 'react';

export default class HomePage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <PageLayout header>
        <div>
          <Heading text="Tremplin" />
        </div>
      </PageLayout>
    );
  }
}
