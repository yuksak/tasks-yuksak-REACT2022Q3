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
}

describe('Search Component', () => {
  test('renders search placeholder text', () => {
    render(<SearchBar />);
    const placeholder = screen.getByPlaceholderText(/Search/i);
    expect(placeholder).toBeInTheDocument();
  });

  test('renders empty value if LS is empty', () => {
    render(<SearchBar />);
    const value = screen.getByDisplayValue('');
    expect(value).toBeInTheDocument();
  });

  test('renders value if LS has it', () => {
    render(<SearchBar />);
    userEvent.type(screen.getByDisplayValue(''), 'test');
  });

  test('renders mock of LS', () => {
    render(<SearchBar />);
    localStorage = new LocalStorageMock();
  });
});
