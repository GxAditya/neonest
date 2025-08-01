export const navLinks = [
  {
    label: 'Home',
    path: '/',
    type: 'link',
  },
  {
    label: 'Baby Care',
    type: 'dropdown',
    items: [
      { label: 'Growth', path: '/Growth' },
      { label: 'Feeding', path: '/Feeding' },
      { label: 'Sleep', path: '/Sleep' },
      { label: 'Medical', path: '/Medical' },
    ],
  },
  {
    label: 'Essentials',
    path: '/Essentials',
    type: 'link',
  },
  {
    label: 'Memories',
    path: '/Memories',
    type: 'link',
  },
  {
    label: 'Resources',
    type: 'dropdown',
    items: [
      { label: 'All Resources', path: '/Resources' },
      { label: 'FAQs', path: '/Faqs' },
    ],
  },
  {
    label: 'Lullaby',
    path: '/Lullaby',
    type: 'link',
  },
];
