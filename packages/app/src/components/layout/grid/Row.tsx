import { styled } from "@components/styles";

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media (max-width: 700px) {
      flex-direction: column;
    }
  `;

export const GridItem = styled.div<{ flex?: string }>`
 flex: ${props => props.flex};
`

