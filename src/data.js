import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    
    {
      text: 'About',
      links: [

        {
          text: 'About us',
          href: '/about',
        },
        {
          text: 'Contact',
          href: '/contact',
        },
        // {
        //   text: 'Terms',
        //   href: getPermalink('/terms'),
        // },
        {
          text: 'Our Vision',
          href: getPermalink('/vision'),
        },
      ],
    },
    {
      text: 'Podcast',
      href: getPermalink('/podcast'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Explore',
      links: [
        { text: 'Home', href: '#' },
        { text: 'About Us', href: '#' },
        { text: 'Blog', href: '#' },  
          
      ],
    },
    {
      title: 'Initiatives',
      links: [
        { text: 'SIP', href: '#' },
        { text: 'CAP', href: '#' },
        { text: 'Podcast', href: '#' },
        { text: 'Startup Hub', href: '#' },
        { text: 'E Summit', href: '#' },
      ],
    },
    {
      title: 'Feedback',
      links: [
        {text: 'Contact', href: '#'}           
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  
};
