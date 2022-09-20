export const enum Categories {
  React = 'react',
  General = 'general',
  Js = 'javascript',
  Ts = 'typescript',
  Css = 'css',
  Html = 'html',
}

export interface ITest {
  name: Categories;
  progress: number;
  pts: number;
}
