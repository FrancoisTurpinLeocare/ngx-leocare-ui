export enum ETextColor {
  TRANSPARENT = "TRANSPARENT",

  PURPLE_55 = "PURPLE_55",
  CYAN_70 = "CYAN_70",
  YELLOW_55 = "YELLOW_55",

  GREY_100 = "GREY_100",
  GREY_95 = "GREY_95",
  GREY_90 = "GREY_90",
  GREY_80 = "GREY_80",
  GREY_40 = "GREY_40",
  GREY_25 = "GREY_25",
  GREY_0 = "GREY_0",

  PURPLE_95 = "PURPLE_95",
  CYAN_90 = "CYAN_90",
  YELLOW_90 = "YELLOW_90",

  PURPLE_25 = "PURPLE_25",
  YELLOW_25 = "YELLOW_25",

  GREEN_50 = "GREEN_50",
  RED_70 = "RED_70",
  ORANGE_65 = "ORANGE_65",

  GREEN_95 = "GREEN_95",
  RED_95 = "RED_95",
  ORANGE_90 = "ORANGE_90",

  GREEN_30 = "GREEN_30",
  RED_40 = "RED_40",
  ORANGE_30 = "ORANGE_30",
}

export enum ETextSize {
  XXS = "XXS",
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
}
export const TEXT_SIZE_CONFIG: Record<ETextSize, string> = {
  [ETextSize.XXS]: "text-xxs",
  [ETextSize.XS]: "text-xs",
  [ETextSize.S]: "text-sm",
  [ETextSize.M]: "text-base",
  [ETextSize.L]: "text-lg",
  [ETextSize.XL]: "text-xl",
  [ETextSize.XXL]: "text-3.5xl",
};
export enum ETextAlign {
  LEFT = "LEFT",
  CENTER = "CENTER",
  RIGHT = "RIGHT",
}
export const TEXT_ALIGN_CONFIG: Record<ETextAlign, string> = {
  [ETextAlign.LEFT]: "text-left",
  [ETextAlign.CENTER]: "text-center",
  [ETextAlign.RIGHT]: "text-right",
};
export enum ETextFamily {
  HOLE = "HOLE",
  STEVEN = "STEVEN",
}
export const TEXT_FAMILY_CONFIG: Record<ETextFamily, string> = {
  [ETextFamily.HOLE]: "font-hole",
  [ETextFamily.STEVEN]: "font-steven",
};
export const TEXT_COLOR_CONFIG: Partial<Record<ETextColor, string>> = {
  [ETextColor.PURPLE_55]: "text-purple-55",
  [ETextColor.CYAN_70]: "text-cyan-70",
  [ETextColor.YELLOW_55]: "text-yellow-55",

  [ETextColor.GREY_100]: "text-grey-100",
  [ETextColor.GREY_95]: "text-grey-90",
  [ETextColor.GREY_90]: "text-grey-90",
  [ETextColor.GREY_80]: "text-grey-80",
  [ETextColor.GREY_40]: "text-grey-40",
  [ETextColor.GREY_25]: "text-grey-25",
  [ETextColor.GREY_0]: "text-grey-0",

  [ETextColor.PURPLE_95]: "text-purple-95",
  [ETextColor.CYAN_90]: "text-cyan-90",
  [ETextColor.YELLOW_90]: "text-yellow-90",

  [ETextColor.PURPLE_25]: "text-purple-25",
  [ETextColor.YELLOW_25]: "text-yellow-25",

  [ETextColor.GREEN_50]: "text-green-50",
  [ETextColor.RED_70]: "text-red-70",
  [ETextColor.ORANGE_65]: "text-orange-65",

  [ETextColor.GREEN_95]: "text-green-95",
  [ETextColor.RED_95]: "text-red-95",
  [ETextColor.ORANGE_90]: "text-orange-90",

  [ETextColor.GREEN_30]: "text-green-30",
  [ETextColor.RED_40]: "text-red-40",
  [ETextColor.ORANGE_30]: "text-orange-30",
};
