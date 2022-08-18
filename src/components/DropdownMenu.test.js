import React from "react";
import { render, screen } from "@testing-library/react";
import DropdownMenu from "./DropdownMenu";
import userEvent from "@testing-library/user-event";

describe("DropdownMenu", () => {
  it("renders a hidden dropdown menu", () => {
    render(<DropdownMenu />);
    const dropdownMenu = screen.getByRole("menu", { hidden: true });

    expect(dropdownMenu).not.toBeVisible();
  });

  it("renders a visible dropdown menu when visible is true", () => {
    render(<DropdownMenu visible={true} />);
    const menu = screen.getByRole("menu");

    expect(menu).toBeVisible();
  });

  it("stops propagation of click events", () => {
    jest.spyOn(Event.prototype, "stopPropagation");
    render(<DropdownMenu visible={true} />);
    const menu = screen.getByRole("menu");

    userEvent.click(menu);
    expect(Event.prototype.stopPropagation).toHaveBeenCalled();
  });
});
