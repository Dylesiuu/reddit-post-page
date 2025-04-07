import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import userEvent from "@testing-library/user-event";

describe("Navbar", () => {
  it("should pass", async () => {
    render(<Navbar />);

    expect(screen.getByText("5")).toBeInTheDocument();

    await userEvent.click(screen.getByLabelText("Notifications"));

    expect(screen.queryByText("5")).not.toBeInTheDocument();
  });
});
