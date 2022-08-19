import React from "react";
import { render, screen } from "@testing-library/react";
import DropdownMenu from "./DropdownMenu";
import userEvent from "@testing-library/user-event";

describe("DropdownMenu", () => {
  it("renders a dropdown menu", () => {
    render(<DropdownMenu />);
    const dropdownMenu = screen.getByRole("menu");

    expect(dropdownMenu).toBeVisible();
  });

  it("stops propagation of click events", () => {
    jest.spyOn(Event.prototype, "stopPropagation");
    render(<DropdownMenu visible={true} />);
    const menu = screen.getByRole("menu");

    userEvent.click(menu);
    expect(Event.prototype.stopPropagation).toHaveBeenCalled();
  });
});
