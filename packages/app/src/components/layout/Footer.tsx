import { styled } from "@components/styles";
import { Component } from "react";
import { Container } from "./Container";

const StyledFooter = styled.div`
	height: 250px;
	border: 1px solid #979797;
	background-color: ${props => props.theme.color.greyLight};

  span, a {
    font-size: ${props => props.theme.fontSize.xxs};
  }

  span {
    color: ${props => props.theme.color.greyDark};
  }

  a {
    color: ${props => props.theme.color.blueLighter};
  }

  img {
    padding: 20px 0px 10px 0px;
	  height: 79px;
	  width: 137px;
}
`

export class Footer extends Component<{}> {

  public render() {
    return (
      <StyledFooter>
        <Container>
          <img src="/static/assets/img/marianne.svg"></img>
          <div>
            <span>© 2019 Tremplin</span>
            <span> | </span>
            <a>Mentions légales</a>
            <span> | </span>
            <a>Données personnelles</a>
            <span> | </span>
            <a>Accessibilité</a>
            <span> | </span>
            <a>Contact</a>
          </div>
        </Container>
      </StyledFooter>
    )
  }

}
