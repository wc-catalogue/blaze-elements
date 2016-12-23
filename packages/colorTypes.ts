const ColorTypes = {
  brand: 'brand',
  info: 'info',
  warning: 'warning',
  success: 'success',
  error: 'error'
};

export type ColorType = typeof ColorTypes;

export function cssClassForColorType(prefix, color: ColorType, singleDash: boolean = false) {
  return prefix && color ? `${prefix}-${singleDash ? '' : '-'}${color}` : null;
}
