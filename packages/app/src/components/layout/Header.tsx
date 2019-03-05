import Link from "next/link";
import * as React from "react";
import styled from 'styled-components';

const TopNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 20px;
  align-items: center;
`

const PageLink = styled.a`
  flex: 0 1 100px;
  margin-right: 10px;
  &:hover{
    box-shadow: 1px 1px;
  }
`;

export class Header extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <TopNav>
        <Link href="/">
          <PageLink>Accueil</PageLink>
        </Link>
        <Link href="/offers">
          <PageLink>Offres</PageLink>
        </Link>
        <Link href="/about">
          <PageLink>A propos</PageLink>
        </Link>
      </TopNav>
    );
  }
}
