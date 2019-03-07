import * as React from "react";
import { Header } from "./Header";

export class PageLayout extends React.Component<{ header?: boolean }> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        {this.props.header && <Header />}
        {this.props.children}
      </div>
    );
  }

}
