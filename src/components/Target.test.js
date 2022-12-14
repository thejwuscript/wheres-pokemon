import React from "react";
import { render, screen } from "@testing-library/react";
import Target from "./Target";
import userEvent from "@testing-library/user-event";

describe("Target", () => {
  it("renders an empty circle with a red border", () => {
    render(<Target position={{ x: 30, y: 30 }} />);
    const target = screen.getByRole("figure");
    const style = window.getComputedStyle(target);

    expect(target).toBeVisible();
    expect(style.borderColor).toBe("red");
    expect(style.backgroundColor).toBe("transparent");
  });

  it("calls moveTarget and moveDropdownMenu when the target is clicked", () => {
    const moveTargetMock = jest.fn();
    const moveDropdownMenuMock = jest.fn();
    render(
      <Target
        position={{ x: 20, y: 20 }}
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
