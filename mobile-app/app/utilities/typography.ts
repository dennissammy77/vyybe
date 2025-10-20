import { StyleProp, TextStyle } from 'react-native';

// const FONT_FAMILY = 'Open_Sans';

type FontName = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8' | 'h9' | 'h10' | 'title' | 'heading' | 'subHeading' | 'subTitle1' | 'subTitle2' | 'body' | 'bodyLarge' | 'bodyMedium' | 'bodySmall' | 'bodyXSmall' | 'body2XSmall' | 'caption';

const typography: { [font in FontName]: StyleProp<TextStyle> } = {
  h1: {
    // fontFamily: FONT_FAMILY,
    fontWeight: '900',
    lineHeight: 64,
    fontSize: 40
  },

  h2: {
    // fontFamily: FONT_FAMILY,
    fontWeight: '900',
    lineHeight: 48,
    fontSize: 36
  },

  h3: {
    // fontFamily: FONT_FAMILY,
    fontWeight: '900',
    lineHeight: 42,
    fontSize: 32
  },

  h4: {
    // fontFamily: FONT_FAMILY,
    fontWeight: '900',
    lineHeight: 36,
    fontSize: 28
  },

  h5: {
    // fontFamily: FONT_FAMILY,
    fontWeight: '900',
    lineHeight: 34,
    fontSize: 24
  },

  h6: {
    // fontFamily: FONT_FAMILY,
    fontWeight: '700',
    lineHeight: 32,
    fontSize: 22
  },

  h7: {
    // fontFamily: FONT_FAMILY,
    fontWeight: '700',
    lineHeight: 30,
    fontSize: 20
  },

  h8: {
    // fontFamily: FONT_FAMILY,
    fontWeight: '700',
    lineHeight: 30,
    fontSize: 18
  },
  h9: {
    // fontFamily: FONT_FAMILY,
    fontWeight: '700',
    lineHeight: 30,
    fontSize: 16
  },
  h10: {
    // fontFamily: FONT_FAMILY,
    fontWeight: '700',
    lineHeight: 30,
    fontSize: 14
  },

  title: {
    // fontFamily: FONT_FAMILY,
    fontWeight: '900',
    lineHeight: 36,
    fontSize: 28
  },

  heading: {
    // fontFamily: FONT_FAMILY,
    fontWeight: '700',
    lineHeight: 32,
    fontSize: 28
  },

  subHeading: {
    // fontFamily: FONT_FAMILY,
    fontWeight: '600',
    lineHeight: 28,
    fontSize: 24
  },

  subTitle1: {
    // fontFamily: FONT_FAMILY,
    fontWeight: '500',
    lineHeight: 18,
    fontSize: 16
  },

  subTitle2: {
    // fontFamily: FONT_FAMILY,
    fontWeight: '500',
    lineHeight: 16,
    fontSize: 14
  },

  body: {
    // fontFamily: FONT_FAMILY,
    fontWeight: '400',
    lineHeight: 24,
    fontSize: 14
  },

  bodyLarge: {
    // fontFamily: FONT_FAMILY,
    fontWeight: '400',
    lineHeight: 24,
    fontSize: 16
  },

  bodyMedium: {
    // fontFamily: FONT_FAMILY,
    fontWeight: '400',
    lineHeight: 18,
    fontSize: 13
  },

  bodySmall: {
    // fontFamily: FONT_FAMILY,
    fontWeight: '400',
    lineHeight: 18,
    fontSize: 12
  },
  bodyXSmall: {
    // fontFamily: FONT_FAMILY,
    fontWeight: '400',
    lineHeight: 18,
    fontSize: 10
  },
  body2XSmall: {
    // fontFamily: FONT_FAMILY,
    fontWeight: '400',
    lineHeight: 18,
    fontSize: 8
  },

  caption: {
    // fontFamily: FONT_FAMILY,
    fontWeight: '300',
    lineHeight: 24,
    fontSize: 12
  }
};

export default typography;
