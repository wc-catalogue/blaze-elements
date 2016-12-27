const ColorTypes = {
  brand: 'brand',
  info: 'info',
  warning: 'warning',
  success: 'success',
  error: 'error'
};

export type ColorType = typeof ColorTypes;

export function cssClassForColorType(prefix: string, color: ColorType, singleDash: boolean = false): string | null {
  return color
    ? `${prefix}-${singleDash ? '' : '-'}${color}`
    : null;
}
