// import React from 'react';

// import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
// import Form from './index';
// import userEvent from '@testing-library/user-event';
// import { act } from 'react-dom/test-utils';

// const mockCard = jest.fn((props) => {
//   const { fullName, birthday, country, gender, image } = props;
//   return Promise.resolve({ fullName, birthday, country, gender, image });
// });

// describe('Form Page', () => {
//   afterEach(cleanup);

//   it('renders form component', () => {
//     render(<Form />);

//     const element = screen.getByTestId('form');
//     expect(element).toBeInTheDocument();
//   });

//   it('should render the basic fields', () => {
//     render(<Form />);

//     expect(screen.getByTestId('fullNameInput')).toBeInTheDocument();
//     expect(screen.getByTestId('birthdayInput')).toBeInTheDocument();
//     expect(screen.getByTestId('countryInput')).toBeInTheDocument();
//     expect(screen.getByTestId('genderInput')).toBeInTheDocument();
//     expect(screen.getByTestId('confirmationInput')).toBeInTheDocument();
//     expect(screen.getByTestId('submitButton')).toBeInTheDocument();
//   });

//   it('should display required error when value is invalid', async () => {
//     render(<Form />);

//     fireEvent.submit(screen.getByTestId('submitButton'));

//     expect(await screen.findAllByTestId('errorAlert')).toHaveLength(5);
//     expect(mockCard).not.toBeCalled();
//   });

//   it('should display min length error when full name is invalid', async () => {
//     render(<Form />);

//     userEvent.type(screen.getByTestId('fullNameInput'), 'One');
//     fireEvent.submit(screen.getByTestId('submitButton'));

//     expect(await screen.findByText(/Your name must be more than 6 letters!/i)).toBeInTheDocument();
//     expect(mockCard).not.toBeCalled();
//     expect((screen.getByTestId('fullNameInput') as HTMLInputElement).value).toBe('One');
//   });

//   it('should not display error when value is valid', async () => {
//     render(<Form />);

//     userEvent.type(screen.getByTestId('fullNameInput'), 'One Two');
//     fireEvent.submit(screen.getByTestId('submitButton'));

//     expect(mockCard).not.toBeCalled();
//     expect(await screen.findAllByTestId('errorAlert')).toHaveLength(4);
//     expect((screen.getByTestId('fullNameInput') as HTMLInputElement).value).toBe('One Two');
//   });

//   it('should submit handler after submit', async () => {
//     const addCardHandler = jest.fn();
//     global.URL.createObjectURL = jest.fn();

//     const { getByTestId, getByText } = render(<Form />);

//     const file = new File(['test content'], 'test.png', {
//       type: 'image/png',
//     });

//     await act(async () => {
//       fireEvent.change(getByTestId('fullNameInput'), { target: { value: 'One Two' } });
//       fireEvent.change(getByTestId('birthdayInput'), { target: { value: '2022-11-18' } });
//       fireEvent.change(getByTestId('countryInput'), { target: { value: 'Uzbekistan' } });
//       fireEvent.click(getByTestId('genderInput'));
//       fireEvent.click(getByTestId('confirmationInput'));

//       await waitFor(() => {
//         userEvent.upload(getByTestId('fileInput') as HTMLInputElement, file);
//       });
//     });

//     await act(async () => {
//       fireEvent.submit(getByTestId('form'));
//     });

//     await act(async () => {
//       expect(getByText(/Saved/i)).toBeInTheDocument();

//       if (addCardHandler) {
//         expect(addCardHandler).toHaveBeenCalled();
//       }
//     });
//   });
// });
