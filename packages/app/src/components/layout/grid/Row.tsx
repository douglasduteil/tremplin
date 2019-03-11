import { media, styled } from "@components/styles";
import { css } from "@components/styles/styledComponents";

export const Row = styled.div<{ wrap?: boolean, spaceBetween?: boolean }>`
    display: flex;
    flex-direction: row;
    ${props => props.wrap && css`flex-wrap: wrap;`}
    ${props => props.spaceBetween && css`justify-content: space-between;`}
    ${media.tablet`flex-direction: column;`}
    ${media.phone`flex-direction: column;`}
  `;

export const GridItem = styled.div<{ flex?: string }>`
 flex: ${props => props.flex};
`

