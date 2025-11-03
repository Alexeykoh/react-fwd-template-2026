import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HomePage } from '@pages/home';

describe('HomePage', () => {
  it('should render the home page', () => {
    render(<HomePage />);
    expect(screen.getByText('React FSD Template 2026')).toBeInTheDocument();
  });

  it('should display the description', () => {
    render(<HomePage />);
    expect(
      screen.getByText(/Шаблон проекта с Feature-Sliced Design архитектурой/i)
    ).toBeInTheDocument();
  });
});
