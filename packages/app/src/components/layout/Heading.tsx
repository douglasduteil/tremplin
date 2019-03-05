import * as React from 'react';
import styled from 'styled-components';

interface HeadingProps {
  text: string;
}

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat";
  position: relative;
  z-index: 1;
  text-align: center;
`

const TitleBack = styled.span`
  font-size: 100px;
  color: #EEEFF0;
  font-weight: 800;
  line-height: 86px;
`
const TitleFront = styled.span`
  color: #0B1C3D;
  font-size: 38px;
  font-weight: 500;
  position: absolute;
`

export class Heading extends React.Component<HeadingProps, any> {
  public render(): JSX.Element {
    const { text } = this.props;
    return (
      <Title>
        <TitleBack>{text}</TitleBack>
        <TitleFront>{text}</TitleFront>
      </Title>
    );
  }
}
