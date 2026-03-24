/**
 * Design tokens extracted from the existing Figma-generated styles.
 * These are documentation + reference values for gradual adoption.
 * DO NOT use these to replace inline styles until visual baseline is verified.
 */

export const colors = {
  bg: '#f7f7f7',
  textPrimary: '#393737',
  textSecondary: '#888787',
  textBlack: '#000000',
  accent: '#f54e2d',
  accentBlue: '#2979ff',
  cardBorder: 'rgba(3,3,2,0.12)',
  badgeBg: 'rgba(0,0,0,0.55)',
  ctaBg: 'rgba(12,12,12,0.82)',
  codeBg: 'rgba(0,0,0,0.8)',
  codeText: 'rgba(255,255,255,0.5)',
  dotGreen: '#80f571',
} as const;

export const radius = {
  sm: '12px',
  md: '20px',
  lg: '30px',
  pill: '50px',
  badge: '18px',
  label: '300px',
} as const;

export const shadows = {
  card: '0px 50px 40px 0px rgba(0,0,0,0.01), 0px 50px 40px 0px rgba(0,0,0,0.02), 0px 20px 40px 0px rgba(0,0,0,0.05), 0px 3px 10px 0px rgba(0,0,0,0.08)',
  cta: '0px 3px 6px 0px rgba(0,0,0,0.19), 0px 10px 10px 0px rgba(0,0,0,0.17), 0px 23px 14px 0px rgba(0,0,0,0.1), 0px 41px 17px 0px rgba(0,0,0,0.03)',
  label: '0px 1px 4px 0px rgba(0,0,0,0.1)',
} as const;

export const typography = {
  hero: { size: '70px', lineHeight: '90px', tracking: '-3.5px' },
  h1: { size: '56px', lineHeight: '68px', tracking: '-2.8px' },
  h2: { size: '48px', lineHeight: '64px', tracking: '-1.44px' },
  h3: { size: '32px', lineHeight: 'normal' },
  h4: { size: '24px', lineHeight: 'normal', tracking: '-0.48px' },
  body: { size: '16px', lineHeight: '26px' },
  bodyLg: { size: '18px', lineHeight: '27px', tracking: '-0.2px' },
  bodyXl: { size: '20px', lineHeight: '32px' },
  caption: { size: '14px', lineHeight: 'normal' },
  badge: { size: '13px', lineHeight: 'normal' },
  code: { size: '14px', lineHeight: '22px' },
  mono: { size: '15px', lineHeight: '21px' },
} as const;

export const spacing = {
  pageGap: '150px',
  sectionGap: '180px',
  pagePadding: '24px',
  cardGap: '24px',
  contentWidth: '1200px',
  heroWidth: '996px',
} as const;
