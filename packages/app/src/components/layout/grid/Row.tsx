import { styled } from "@components/styles";
import { css } from "@components/styles/styledComponents";

export const Row = styled.div<{spaceBetween?: boolean}>`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    ${props => props.spaceBetween && css`justify-content: space-between;`}

    @media (max-width: 700px) {
      flex-direction: column;
    }
  `;

export const GridItem = styled.div<{ flex?: string }>`
 flex: ${props => props.flex};
`

