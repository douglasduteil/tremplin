import { PageLayout } from "@components/layout";
import * as React from "react";

export default class AboutPage extends React.Component<any, any> {

  public render(): JSX.Element {
    return (
      <PageLayout>
        <p>This is the about page</p>
      </PageLayout>
    );
  }
}
