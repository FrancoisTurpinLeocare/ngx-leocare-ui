export enum EAtomTitleLevel {
  H1 = "H1",
  H2 = "H2",
  H3 = "H3",
  H4 = "H4",
}
export enum EAtomTitleAlignConfig {
  ALIGN_CENTERED = "CENTERED",
  ALIGN_LEFT = "ALIGN_LEFT",
}

export enum EAtomTitleDisplayConfig {
  DISPLAY_H1 = "DISPLAY_H1",
  DISPLAY_H2 = "DISPLAY_H2",
  DISPLAY_H3 = "DISPLAY_H3",
  DISPLAY_H4 = "DISPLAY_H4",
}

export enum EAtomTitleColorConfig {
  PURPLE_55 = "PURPLE_55",
  GREY_25 = "GREY_25",
  GREY_40 = "GREY_40",
  GREY_80 = "GREY_80",
  GREY_40_OPACITY_50 = "GREY_40_OPACITY_50",
  WHITE = "WHITE",
}

export const ATOM_TITLE_ALIGN_CONFIG: Record<EAtomTitleAlignConfig, string> = {
  [EAtomTitleAlignConfig.ALIGN_CENTERED]: "text-center",
  [EAtomTitleAlignConfig.ALIGN_LEFT]: "text-left",
};

export const ATOM_TITLE_DISPLAY_CONFIG: Record<
  EAtomTitleDisplayConfig,
  string
> = {
  [EAtomTitleDisplayConfig.DISPLAY_H1]: "font-paytone font-normal text-3xl",
  [EAtomTitleDisplayConfig.DISPLAY_H2]: "font-paytone font-normal text-xl",
  [EAtomTitleDisplayConfig.DISPLAY_H3]: "font-paytone font-normal text-base",
  [EAtomTitleDisplayConfig.DISPLAY_H4]: "font-hole text-lg",
};

export const ATOM_TITLE_COLOR_CONFIG: Record<EAtomTitleColorConfig, string> = {
  [EAtomTitleColorConfig.PURPLE_55]: "text-purple-55",
  [EAtomTitleColorConfig.GREY_25]: "text-grey-25",
  [EAtomTitleColorConfig.GREY_40]: "text-grey-40",
  [EAtomTitleColorConfig.GREY_80]: "text-grey-80",
  [EAtomTitleColorConfig.GREY_40_OPACITY_50]: "text-grey-40 opacity-50",
  [EAtomTitleColorConfig.WHITE]: "text-grey-100",
};

export const ATOM_TITLE_DISPLAY_CONFIG_BY_DEFAULT: Record<
  EAtomTitleLevel,
  EAtomTitleDisplayConfig
> = {
  [EAtomTitleLevel.H1]: EAtomTitleDisplayConfig.DISPLAY_H1,
  [EAtomTitleLevel.H2]: EAtomTitleDisplayConfig.DISPLAY_H2,
  [EAtomTitleLevel.H3]: EAtomTitleDisplayConfig.DISPLAY_H3,
  [EAtomTitleLevel.H4]: EAtomTitleDisplayConfig.DISPLAY_H4,
};
