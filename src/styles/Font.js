import {Colors} from '.';
import {scaleFont} from './Mixins';

// FONT FAMILY
export const FONT_FAMILY_REGULAR = 'Cochin';
export const FONT_FAMILY_MEDIUM = 'Cochin';
export const FONT_FAMILY_BOLD = 'Cochin';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_MEDIUM = '600';
export const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_35 = scaleFont(35);
export const FONT_SIZE_30 = scaleFont(30);
export const FONT_SIZE_25 = scaleFont(25);
export const FONT_SIZE_20 = scaleFont(20);
export const FONT_SIZE_19 = scaleFont(19);
export const FONT_SIZE_18 = scaleFont(18);
export const FONT_SIZE_17 = scaleFont(17);
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_15 = scaleFont(15);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_13 = scaleFont(13);
export const FONT_SIZE_12 = scaleFont(12);
export const FONT_SIZE_11 = scaleFont(11);
export const FONT_SIZE_10 = scaleFont(10);
export const FONT_SIZE_9 = scaleFont(9);

// LINE HEIGHT
export const LINE_HEIGHT_30 = scaleFont(30);
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_MEDIUM = {
  fontFamily: FONT_FAMILY_MEDIUM,
  fontWeight: FONT_WEIGHT_MEDIUM,
};

export const FONT_NAVIGATION_MEDIUM = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_MEDIUM,
  fontSize: FONT_SIZE_16,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};

export const SHADOW_EFFECT = {
  shadowColor: Colors.BLACK,
  shadowOffset: {width: 0, height: 1},
  shadowOpacity: 0.2,
  shadowRadius: 5,
  elevation: 5,
};

export const accessoryStyle = {
  width: 17,
  height: 20,
  position: 'absolute',
  top: '45%',
  left: '92%',
  tintColor: Colors.GRAY_MEDIUM,
};

export const activityStyle = {alignSelf: 'center', height: '100%'};

export const borderLine = (top, left, right, bottom) => {
  return {
    borderBottomWidth: bottom,
    borderLeftWidth: left,
    borderRightWidth: right,
    borderTopWidth: top,
    borderColor: Colors.GRAY_LIGHT,
  };
};
