import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import Target from "./components/Target";
import Image from "./components/Image";
import DropdownMenu from "./components/DropdownMenu";

describe('App', () => {
  it('makes the target component visible when the image is clicked', async () => {
    render (<App />);
    expect(screen.queryByRole('figure')).not.toBeInTheDocument();
    const image = screen.getByRole("img");

    userEvent.click(image);

    const target = await screen.findByRole("figure");
    expect(target).toBeVisible();
  });

  it('makes the dropdown menu visible when the target is clicked', async () => {
    render (<App />);
    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
    const image = screen.getByRole("img");

    userEvent.click(image);
    
    const menu = await screen.findByRole("menu");
    expect(menu).toBeVisible();
  })
})