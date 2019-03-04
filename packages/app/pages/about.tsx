import { Layout } from "@components";
import * as React from "react";

export default class AboutPage extends React.Component<any, any> {

  public render(): JSX.Element {
    return (
      <Layout>
        <p>This is the about page</p>
      </Layout>
    );
  }
}
