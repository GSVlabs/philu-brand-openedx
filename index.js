import messages from './messages';

export { default as logoHeader } from './logo.svg';
export { default as footerLogo } from './logo-footer.svg';
export { default as svgSprite } from './svg-sprite.svg';

export const footerIcons = [
  {
    url: 'https://www.linkedin.com/company/philanthropyuniversity/',
    title: 'linkedin',
    icon: 'ico-linkedin',
  },
  {
    url: 'https://www.facebook.com/philanthropyuniversity',
    title: 'facebook',
    icon: 'ico-facebook',
  },
  {
    url: 'https://twitter.com/philanthropyuni?lang=en',
    title: 'twitter-x',
    icon: 'ico-twitter-x-circle',
  },
  {
    url: 'https://www.youtube.com/channel/UCQ6qeELvsDgIt4VO2bP0TBw',
    title: 'youtube',
    icon: 'ico-youtube',
  },
];

export const footerLinks = [
  {
    href: 'https://www.philanthropyu.org/about-us',
    message: messages['footer.staticPages.about'],
    targetBlank: true,
  },
  {
    href: 'https://www.philanthropyu.org/terms-of-use',
    message: messages['footer.staticPages.tos'],
    targetBlank: true,
  },
  {
    href: 'https://www.philanthropyu.org/privacy-policy',
    message: messages['footer.staticPages.privacy'],
    targetBlank: true,
  },
  {
    href: 'https://edx.readthedocs.io/projects/open-edx-learner-guide/en/open-release-quince.master/index.html',
    message: messages['footer.staticPages.faq'],
    targetBlank: true,
  },
];

export const isFooterDark = true;

export const displayCreatedByBlock = true;
