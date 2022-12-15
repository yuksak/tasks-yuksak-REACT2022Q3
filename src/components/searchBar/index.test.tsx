// import React from 'react';

// import userEvent from '@testing-library/user-event';
// import { cleanup, fireEvent, render, screen } from '@testing-library/react';

// import SearchBar from './index';

// class LocalStorageMock {
//   store: { [k: string]: string };
//   length: number;

//   constructor() {
//     this.store = {};
//     this.length = 0;
//   }

//   key = (idx: number): string => {
//     const values = Object.values(this.store);
//     return values[idx];
//   };

//   clear() {
//     this.store = {};
//   }

//   getItem(key: string) {
//     return this.store[key] || null;
//   }

//   setItem(key: string, value: string) {
//     this.store[key] = String(value);
//   }

//   removeItem(key: string) {
//     delete this.store[key];
//   }

//   getAll() {
//     console.log(this.store);
//   }
// }

// global.localStorage = new LocalStorageMock();

// function setItem(jsonId: string, newJson: { data: string }) {
//   global.localStorage.setItem(jsonId, JSON.stringify(newJson));
// }

// describe('Search Component', () => {
//   const setSubmission = jest.fn();
//   const setSearchValue = jest.fn();

//   const search = jest.fn();
//   const setup = () => {
//     const utils = render(<SearchBar searchValue="search" pageNumber={1} setSearchValue={search} />);

//     const input = utils.getByTestId('search-input') as HTMLInputElement;
//     return {
//       input,
//       ...utils,
//     };
//   };

//   afterEach(() => {
//     global.localStorage.clear();
//   });

//   it('renders test value', () => {
//     render(<SearchBar searchValue="search" pageNumber={1} setSearchValue={search} />);

//     const input = screen.getByTestId('search-input') as HTMLInputElement;
//     userEvent.type(input, 'test');
//     expect(input.value).toEqual('test');
//   });

//   it('sets data into local storage', () => {
//     render(<SearchBar searchValue="search" pageNumber={1} setSearchValue={search} />);
//     const jsonId = '222';
//     const newJson = { data: 'json data' };
//     setItem(jsonId, newJson);
//     expect(localStorage.getItem(jsonId)).toEqual(JSON.stringify(newJson));
//   });

//   it('has data in local storage', () => {
//     render(<SearchBar searchValue="search" pageNumber={1} setSearchValue={search} />);
//     const jsonId = '123';
//     const newJson = { data: 'json data' };
//     global.localStorage.setItem(jsonId, JSON.stringify(newJson));
//     setItem(jsonId, newJson);
//   });

//   test('checks onChange and onKeyDown of input', () => {
//     const { input } = setup();

//     fireEvent.change(input, { target: { value: 'Morty Smith' } });
//     fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });

//     const keyboardHandler = (e: React.KeyboardEvent) => {
//       if (e.key === 'Enter') {
//         setSubmission(true);
//         expect(input.value).toBe('Morty Smith');
//       }
//     };
//   });
// });
