import React from 'react';
import App from './App';
import { render, fireEvent, screen} from './utils/test-utils';
import userEvent from '@testing-library/user-event';

test('renders Widgets List', () => {
  const { getByText, getByRole } = render(<App />, { initialState: { widgets: { widgets: []} } });
  const titleElement = getByText(/Widgets List/i);

  const addButton = getByRole('button');
  expect(titleElement).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});


test('allows to add a widget', () => {
  const { getByText, queryByText, getByRole } = render(<App />, { initialState: { widgets: { widgets: []} } });
  const linkElement = getByText(/Widgets List/i);

  const addButton = getByRole('button');
  expect(queryByText(/Language/)).toBeNull();
  userEvent.click(addButton);
  expect(getByText(/Language/)).toBeInTheDocument();


  // validates language choosen
  const nextButton = getByRole('button');
  userEvent.click(nextButton);
  expect(getByText(/Please select a language/)).toBeInTheDocument();



  // allows to choose language
  const selectOption = getByRole('combobox');
  fireEvent.change(selectOption, {target: {value: 'es'}});

  expect(screen.queryByText(/Please select a language/)).toBeNull();
  userEvent.click(nextButton);


  expect(screen.queryByText(/Enter name for the widget/)).toBeInTheDocument();

   // validates name choosen

   const submitButton = getByRole('button');

   userEvent.click(submitButton);

   expect(screen.queryByText(/Please enter a name/)).toBeInTheDocument();

  // allows to set name
  const nameInput = getByRole('textbox');

  fireEvent.change(nameInput, {target: {value: 'peter pan'}});

  expect(screen.queryByText(/Please enter a name/)).toBeNull();
  userEvent.click(submitButton);

  // screen.debug();


  // shows the added widget
  expect(screen.queryByText(/peter pan/)).toBeInTheDocument();
  expect(screen.queryByText(/es/)).toBeInTheDocument();
});


test('allows to remove a widget', () => {
  const { getByText, getByRole } = render(<App />, { initialState: { widgets: { widgets: [{ name: 'peter pan', language: 'es' }]} } });

  // shows initial widgets
  expect(screen.queryByText(/peter pan/)).toBeInTheDocument();
  expect(screen.queryByText(/es/)).toBeInTheDocument();
  const deleteButton = screen.queryByLabelText('delete');


  userEvent.click(deleteButton);



  // shows confirmation dialog
  expect(screen.queryByText(/Are you sure to delete this widget/)).toBeInTheDocument();



  const deleteButtonDialog = getByText('Delete');
  userEvent.click(deleteButtonDialog);
  
  // deletes it after confirmation
  expect(screen.queryByText(/es/)).toBeNull();
  expect(screen.queryByText(/peter pan/)).toBeNull();
  screen.debug();
})
