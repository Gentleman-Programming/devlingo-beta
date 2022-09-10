export const enum categories {
  react = 'react',
  general = 'general',
  js = 'javascript',
  ts = 'typescript',
  css = 'css',
  html = 'html',
}

export interface ITest {
  name: categories;
  progress: number;
  pts: number;
}
