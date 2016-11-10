export const PRIMARY_COLOR = '#1b2e4a';
export const SECONDARY_COLOR = '#2f4361';
export const TERTIARY_COLOR = '#ffffff';
export const BORDER_COLOR = '#d9d9d9';
export const HIGHLIGHT_COLOR = '#4083cf';
export const PRIMARY_TEXT_COLOR = '#ffffff';
export const SECONDARY_TEXT_COLOR = '#c0c6cf';
export const HEADER_TEXT_COLOR = '#2f4361';
export const SCREEN_SIZE = {
  desktop: false, // bigger than 991px
  tablet: false, // Between 768px and 991px
  smartphone: false, // Up to 767px
  mobile: false // Up to 991px (both smartphone and tablet)
};

if (typeof window !== 'undefined') {
  if (window.matchMedia('(min-width: 992px)').matches) {
    SCREEN_SIZE.desktop = true;
  }
  if (window.matchMedia('(min-width: 768px)').matches && window.matchMedia('(max-width: 991px)').matches) {
    SCREEN_SIZE.tablet = true;
  }
  if (window.matchMedia('(max-width: 767px)').matches) {
    SCREEN_SIZE.smartphone = true;
  }
  if (window.matchMedia('(max-width: 991px)').matches) {
    SCREEN_SIZE.mobile = true;
  }
}
