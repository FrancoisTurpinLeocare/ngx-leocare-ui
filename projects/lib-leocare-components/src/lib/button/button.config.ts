export enum EButtonType {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  WARNING = "WARNING",
}
export enum EButtonSize {
  XS = "XS",
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
}

export const BUTTON_TYPE_CONFIG: Record<EButtonType, string> = {
  [EButtonType.PRIMARY]: "bg-purple-55 text-grey-100",
  [EButtonType.SECONDARY]: "bg-grey-95 text-grey-25",
  [EButtonType.WARNING]: "bg-red-70 text-grey-100",
};

export const BUTTON_SIZE_CONFIG: Record<EButtonSize, string> = {
  [EButtonSize.XS]:
    "font-hole text-s bg-transparent text-purple-55 px-0 hover:underline",
  [EButtonSize.SMALL]: "font-steven text-s px-5 py-1 h-[30px]",
  [EButtonSize.MEDIUM]: "font-hole text-s px-5 py-3 h-[44px]",
  [EButtonSize.LARGE]: "font-hole text-s px-5 py-4 h-[51px]",
};

export const BUTTON_ICON_SIZE_CONFIG: Record<EButtonSize, string> = {
  [EButtonSize.XS]: "w-3 h-3",
  [EButtonSize.SMALL]: "w-3.5 h-3.5",
  [EButtonSize.MEDIUM]: "w-4 h-4",
  [EButtonSize.LARGE]: "w-4 h-4",
};

export const BUTTON_ICON_COLOR_CONFIG: Record<EButtonType, string> = {
  [EButtonType.PRIMARY]: "stroke-grey-100",
  [EButtonType.SECONDARY]: "stroke-grey-25",
  [EButtonType.WARNING]: "stroke-grey-100",
};
