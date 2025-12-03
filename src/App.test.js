import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

test('Nudge App title is present', () => {
  useSignInWithGoogle.mockReturnValue([jest.fn(),null]);
  render(<App />);
  const TitleText = screen.getByText(/Nudge App/i);
  expect(TitleText).toBeInTheDocument();
});


test('Sign in Button Appears', () => {
  useSignInWithGoogle.mockReturnValue([jest.fn(),null]);
  render(<App />);
  const SignInButton = screen.getByText(/Sign In/i);
  expect(SignInButton).toBeInTheDocument();
});


jest.mock('react-firebase-hooks/auth',() => ({
  useSignInWithGoogle: jest.fn(),
}));
  
test('View Questions', () => {
  useSignInWithGoogle.mockReturnValue([jest.fn(), {displayName: 'User'}]);
  render(<App />);
  const SignInButton = screen.getByText(/View Questions/i);
  expect(SignInButton).toBeInTheDocument();
});

test('Show Settings', () => {
  useSignInWithGoogle.mockReturnValue([jest.fn(), {displayName: 'User'}]);
  render(<App />);
  const settingsButton = screen.getByRole('button', { name: /settings/i });
  expect(settingsButton).toBeInTheDocument();
});



