export const getBgColor = (item) => {
  switch (item) {
    case 'purple':
      return 'var(--purple100)';
    case 'green':
      return 'var(--green100)';
    case 'blue':
      return 'var(--blue100)';
    default:
      return 'var(--orange100)';
  }
};

export const getBgImage = (item) => {
  switch (item) {
    case '동료':
      return 'var(--purple600)';
    case '지인':
      return 'var(--orange500)';
    case '가족':
      return 'var(--green500)';
    case '친구':
      return 'var(--blue500)';
    default:
      return '#000000';
  }
};
