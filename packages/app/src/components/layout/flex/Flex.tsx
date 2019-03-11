import { media, styled } from "@components/styles";
import { css } from "@components/styles/styledComponents";

interface FlexProps {
  inline?: boolean;

  rowReverse?: boolean;
  column?: boolean;
  columnReverse?: boolean;

  wrap?: boolean;
  nowrap?: boolean;
  wrapReverse?: boolean;

  alignStart?: boolean;
  alignEnd?: boolean;
  alignCenter?: boolean;
  alignBaseline?: boolean;
  alignStretch?: boolean;

  justifyBetween?: boolean;
  justifyStart?: boolean;
  justifyEnd?: boolean;
  justifyCenter?: boolean;
  justifyAround?: boolean;

  contentStart?: boolean;
  contentEnd?: boolean;
  contentCenter?: boolean;
  contentSpaceBetween?: boolean;
  contentSpaceAround?: boolean;
  contentStretch?: boolean;

  full?: boolean;
  noResponsive?: boolean;

}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;


  ${props => props.rowReverse && css`flex-direction: row-reverse;`}
  ${props => props.column && css`flex-direction: column;`}
  ${props => props.columnReverse && css`flex-direction: column-reverse;`}

  ${props => props.inline && css`display: inline-flex;`}

  ${props => props.wrap && css`flex-wrap: wrap;`}
  ${props => props.nowrap && css`flex-wrap: nowrap;`}
  ${props => props.wrapReverse && css`flex-wrap: wrap-reverse;`}

  ${props => props.justifyStart && css`justify-content: flex-start;`}
  ${props => props.justifyEnd && css`justify-content: flex-end;`}
  ${props => props.justifyCenter && css`justify-content: center;`}
  ${props => props.justifyBetween && css`justify-content: space-between;`}
  ${props => props.justifyAround && css`justify-content: space-around;`}

  ${props => props.contentStart && css`align-content: flex-start;`}
  ${props => props.contentEnd && css`align-content: flex-end;`}
  ${props => props.contentCenter && css`align-content: center;`}
  ${props => props.contentSpaceBetween && css`align-content: space-between;`}
  ${props => props.contentSpaceAround && css`align-content: space-around;`}
  ${props => props.contentStretch && css`align-content: stretch;`}

  ${props => props.alignStart && css`align-items: flex-start;`}
  ${props => props.alignEnd && css`align-items: flex-end;`}
  ${props => props.alignCenter && css`align-items: center;`}
  ${props => props.alignBaseline && css`align-items: baseline;`}
  ${props => props.alignStretch && css`align-items: stretch;`}

  ${props => props.full && css`width: 100%; height: 100%;`}

  ${props => !props.noResponsive && css`
    ${media.tablet`flex-direction: column;`}
    ${media.phone`flex-direction: column;`}
  `}

  `;

interface ItemProps {
  inlineBlock?: boolean;
  inlineFlex?: boolean;
  flex?: boolean;

  basis?: string;
  grow?: string;
  shrink?: string;
  noShrink?: boolean;

}

export const Item = styled.div<ItemProps>`
  order: 0;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 1;
  display: block;

  ${props => props.inlineBlock && css`display: inline-block;`}
  ${props => props.inlineFlex && css`display: inline-flex;`}
  ${props => props.flex && css`display: flex;`}

  ${props => props.basis && css`flex-basis: ${props.basis};`}
  ${props => props.grow && css`flex-grow: ${props.grow};`}
  ${props => props.shrink && css`flex-shrink: ${props.shrink};`}
  ${props => props.noShrink && css`flex-shrink: 0;`}
`;

