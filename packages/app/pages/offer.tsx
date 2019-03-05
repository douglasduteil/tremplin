import { Layout } from '@components/layout';
import { withRouter } from 'next/router';
import { Component } from 'react';

class JobOfferPage extends Component<any, any> {

  public render() {
    return (
      <Layout>
        <h1>{this.props.router.query.title}</h1>
        <p>Description</p>
      </Layout>
    );
  }

}

export default withRouter(JobOfferPage);
