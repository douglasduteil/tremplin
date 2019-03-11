import { CSSObject, SimpleInterpolation, ThemedCssFunction } from "styled-components";
import { css } from "./styledComponents";

const sizes: any = {
  desktop: 992,
  phone: 576,
  tablet: 768,
}

export const media: {
  desktop: ThemedCssFunction<any>,
  phone: ThemedCssFunction<any>,
  tablet: ThemedCssFunction<any>
} = Object.keys(sizes).reduce((acc: any, label: string) => {
  acc[label] = (first: TemplateStringsArray | CSSObject,
    ...interpolations: SimpleInterpolation[]) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(first, ...interpolations)}
    }
  `
  return acc
}, {});

