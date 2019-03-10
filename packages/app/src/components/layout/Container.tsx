import { styled } from "@components/styles";
import { css } from "@components/styles/styledComponents";

export const Container = styled.div<{fill?: boolean}>`
  padding: 0 10% 0 10%;
  margin: 0px;
  ${props => props.fill && css`height: 100%`}
`;
