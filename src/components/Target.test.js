import React from "react";
import { render, screen } from '@testing-library/react';
import Target from './Target';


describe('Target', () => {
  it('renders an empty circle with a red border', () => {
    render(<Target />);
    const target = screen.getByRole('figure', { hidden: true });

    expect(target).not.toBeVisible();
  })
});
