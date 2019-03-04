import { Layout } from '@components';
import { withRouter } from 'next/router';
import { Component } from 'react';

class OfferPage extends Component<any, any> {

  public render() {
    return (
      <Layout>
        <h1>{this.props.router.query.title}</h1>
        <p>Description</p>
      </Layout>
    );
  }

}

export default withRouter(OfferPage);
