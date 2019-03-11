import { styled } from "@components/styles";
import { css } from "@components/styles/styledComponents";

interface ContainerProps {
  full?: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 0 10% 0 10%;
  margin: 0px;
  ${props => props.full && css`height: 100%; width: 100%;`}
`;
