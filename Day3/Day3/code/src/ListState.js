import { atom } from 'recoil';

const ListState = atom({
  key: 'ListState',
  default: false,
});

export { ListState };

const PageNumber = atom({
  key: 'PageNumber',
  default: 0,
});

export { PageNumber };
