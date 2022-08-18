import React from "react";
import { render, screen } from "@testing-library/react";
import Target from "./Target";
import userEvent from "@testing-library/user-event";

describe("Target", () => {
  it("renders a hidden empty circle with a red border", () => {
    render(<Target />);
    const target = screen.getByRole("figure", { hidden: true });
    const style = window.getComputedStyle(target);

    expect(target).not.toBeVisible();
    expect(style.borderColor).toBe("red");
    expect(style.backgroundColor).toBe("transparent");
  });

  it("renders a visible circle determined by props", () => {
    render(<Target visible={true} />);
    const target = screen.getByRole("figure");

    expect(target).toBeVisible();
  });

  it("calls moveTarget and moveDropdownMenu when the target is clicked", () => {
    const moveTargetMock = jest.fn();
    const moveDropdownMenuMock = jest.fn();
    render(
      <Target
        visible={true}
        onClick1={moveTargetMock}
        onClick2={moveDropdownMenuMock}
      />
    );
    const target = screen.getByRole("figure");

    userEvent.click(target);

    expect(moveTargetMock).toHaveBeenCalled();
    expect(moveDropdownMenuMock).toHaveBeenCalled();
  });
});
