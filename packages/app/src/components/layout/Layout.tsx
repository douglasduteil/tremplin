import { Header } from "@components";
import * as React from "react";

export class Layout extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    const layoutStyle = {
      border: '1px solid #DDD',
      margin: 20,
      padding: 20,
    }
    return (
      <div style={layoutStyle}>
        <Header />
        {this.props.children}
      </div>
    );
  }

}
