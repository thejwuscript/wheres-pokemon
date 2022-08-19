import { render, screen } from "@testing-library/react";
import Image from "./Image";
import userEvent from "@testing-library/user-event";

describe("Image", () => {
  it("renders an image with the expected source", () => {
    render(<Image />);
    const image = screen.getByRole("img");
    expect(image).toBeVisible();
    expect(image).toHaveAttribute("src", "pokemon.webp");
  });

  it("calls moveTarget when the image is clicked", () => {
    const moveTargetMock = jest.fn();
    const moveDropdownMenuMock = jest.fn();
    render(<Image onClick1={moveTargetMock} onClick2={moveDropdownMenuMock} />);
    const image = screen.getByRole("img");

    userEvent.click(image);
    expect(moveTargetMock).toHaveBeenCalled();
  });

  it("calls moveDropdownMenu when the image is clicked", () => {
    const moveDropdownMenuMock = jest.fn();
    const moveTargetMock = jest.fn();
    render(<Image onClick2={moveDropdownMenuMock} onClick1={moveTargetMock} />);
    const image = screen.getByRole("img");

    userEvent.click(image);
    expect(moveDropdownMenuMock).toHaveBeenCalled();
  });
});
