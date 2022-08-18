import React from "react";
import { render, screen } from '@testing-library/react';
import Target from './Target';


describe('Target', () => {
  it('renders a hidden empty circle with a red border', () => {
    render(<Target />);
    const target = screen.getByRole('figure', { hidden: true });
    const style = window.getComputedStyle(target);

    expect(target).not.toBeVisible();
    expect(style.borderColor).toBe('red');
    expect(style.backgroundColor).toBe('transparent');
  })
});
