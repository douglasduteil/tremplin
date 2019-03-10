import * as React from "react";
import { Footer } from "./Footer";
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
        <Footer></Footer>
      </div>
    );
  }

}
