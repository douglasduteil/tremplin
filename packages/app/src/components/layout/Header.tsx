import Link from "next/link";
import * as React from "react";

const linkStyle = {
  marginRight: 15
}

export class Header extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div>
        <Link href="/">
          <a style={linkStyle}>Accueil</a>
        </Link>
        <Link href="/offers">
          <a style={linkStyle}>Offres</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>A propos</a>
        </Link>
      </div>
    );
  }
}
