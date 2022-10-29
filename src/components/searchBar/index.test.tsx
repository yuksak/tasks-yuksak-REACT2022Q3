import React from 'react';

import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

import SearchBar from './index';

class LocalStorageMock {
  store: { [k: string]: string };
  length: number;

  constructor() {
    this.store = {};
    this.length = 0;
  }

  key = (idx: number): string => {
    const values = Object.values(this.store);
    return values[idx];
  };

  clear() {
    this.store = {};
  }

  getItem(key: string) {
    return this.store[key] || null;
  }

  setItem(key: string, value: string) {
    this.store[key] = String(value);
  }

  removeItem(key: string) {
    delete this.store[key];
  }

  getAll() {
    console.log(this.store);
  }
}

global.localStorage = new LocalStorageMock();

function setItem(jsonId: string, newJson: { data: string }) {
  global.localStorage.setItem(jsonId, JSON.stringify(newJson));
}

describe('Search Component', () => {
  afterEach(() => {
    global.localStorage.clear();
  });

  it('renders test value', () => {
    // render(<SearchBar />);
    // setSearchValue={(searchValue: string) => void} setSubmission={(value: boolean) => void} searchValue="string"
    userEvent.type(screen.getByDisplayValue(''), 'test');
  });

  it('sets data into local storage', () => {
    // render(<SearchBar />);
    const jsonId = '222';
    const newJson = { data: 'json data' };
    setItem(jsonId, newJson);
    expect(localStorage.getItem(jsonId)).toEqual(JSON.stringify(newJson));
  });

  it('has data in local storage', () => {
    // render(<SearchBar />);
    const jsonId = '123';
    const newJson = { data: 'json data' };
    global.localStorage.setItem(jsonId, JSON.stringify(newJson));
    setItem(jsonId, newJson);
  });
});
