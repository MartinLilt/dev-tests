interface User<T> {
  id: T;
}

interface Tab<T> {
  id: string;
  position: number;
  active: boolean;
  content: T;
}

const mango: User<number> = { id: 24 };
const poly: User<string> = { id: '24' };

type TStingTab = Tab<string>;
type TStringArrayTab = Tab<string[]>;

const tab1: TStringArrayTab = {
  id: 'id-1',
  position: 2,
  active: false,
  content: ['content-1', 'content-2', 'content-3'],
};

const tab2: TStingTab = {
  id: 'id-1',
  position: 2,
  active: false,
  content: 'Tab data',
};

console.log(mango, poly, tab1, tab2);

export {};
