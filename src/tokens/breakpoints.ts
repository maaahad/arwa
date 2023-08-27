export enum Breakpoints {
  xs = '@media screen and (width < 575px)',
  sm = '@media screen and (width >= 575px)',
  md = '@media screen and (width >=768px)',
  lg = '@media screen and (width >= 992px)',
  xl = '@media screen and (width >= 1200px)',
  smOnly = '@media screen (575px <= width < 768px)',
  mdOnly = '@media screen and (768px <= width < 992px)',
  lgOnly = '@media screen and (992px <= width <1200px)',
}
