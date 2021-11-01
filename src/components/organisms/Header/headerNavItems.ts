export const headerNavItems = [
  {
    type: 'link',
    linkName: 'Mission',
    linkUrl: '#mission',
    /// Options bellow are so code does not break
    options: [{ linkName: '', linkUrl: '', target: '' }],
  },
  // {
  //   type: 'dropdown',
  //   linkName: 'Products',
  //   //No link here left this here so it dosnt complicate things and keeps eslint happy
  //   linkUrl: '',
  //   options: [{ linkName: '', linkUrl: '', target: '' }],
  // },
  {
    type: 'link',
    linkName: 'About Us',
    linkUrl: '#about-us',
    target: '',
  },
  // {
  //   type: 'link',
  //   linkName: 'Contact',
  //   linkUrl: '#contact-us',
  //   target: '',
  // },
];
