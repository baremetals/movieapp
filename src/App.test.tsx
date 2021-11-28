import React from 'react';
import {
  render,
  screen,
  fireEvent,
  cleanup,
  waitFor,
} from '@testing-library/react';
import App from './App';


jest.mock('./__mock__/axios.ts');

afterEach(cleanup);

describe('App', () => {

  it('should render the search input element', () => {
    render(<App />);
    const searchInputElement = screen.getByPlaceholderText(/search/i);
    expect(searchInputElement).toBeInTheDocument();
  });

  it('should render the ratings input element', () => {
    render(<App />);
    const ratingsInputElement = screen.getByPlaceholderText(/rating/i);
    expect(ratingsInputElement).toBeInTheDocument();
  });

  it('should be able to type into search input', () => {
    render(<App />);
    const searchInputElement = screen.getByPlaceholderText(/search/i);
    fireEvent.change(searchInputElement, { target: { value: 'toy story' } });
    expect(searchInputElement).toBeInTheDocument();
  });

  it('should be able to type into rating input', () => {
    render(<App />);
    const ratingsInputElement = screen.getByPlaceholderText(/rating/i);
    fireEvent.change(ratingsInputElement, { target: { value: 8 } });
    expect(ratingsInputElement).toBeInTheDocument();
  });

  it('should render one movie data', async () => {
    render(<App />);
    // const cardElement = await screen.findByTestId('filmDataItem-0');
    const cardElement = await waitFor(() =>
      screen.getByTestId('filmDataItem-0')
    );
    expect(cardElement).toBeInTheDocument();
  });

  it('should render all movie data', async () => {
    render(<App />);
    const cardElements = await screen.findAllByTestId(/filmDataItem/i);
    expect(cardElements.length).toBe(20);
  });
  
});
