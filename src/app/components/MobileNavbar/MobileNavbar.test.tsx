import React from "react";
import { render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import MobileNavbar from "./MobileNavbar";
// import {
//   BiChevronDown,
//   BiChevronLeftCircle,
//   BiChevronUp,
//   BiMenu,
// } from "react-icons/bi";

// jest.mock("react-icons/bi", () => ({
//   BiChevronDown: () => (
//     <div>
//       <BiChevronDown />
//     </div>
//   ),
//   BiChevronUp: () => (
//     <div>
//       <BiChevronUp />
//     </div>
//   ),
//   BiChevronLeftCircle: () => (
//     <div>
//       <BiChevronLeftCircle />
//     </div>
//   ),
//   BiMenu: () => (
//     <div>
//       <BiMenu />
//     </div>
//   ),
// }));

describe("MobileNavbar", () => {
  beforeEach(() => {
    render(<MobileNavbar />);
  });

  it("should render the navbar and overlay with initial opened state", () => {
    const navbar = screen.getByLabelText("navbar");
    const overlay = screen.getByLabelText("overlay");
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass("opacity-100");
    expect(navbar).toBeInTheDocument();
    expect(navbar).toHaveClass("translate-x-0");
  });

  it("toggle navbar visibility when button is clicked", async () => {
    const toggleButton = screen.getByLabelText("toggle-navbar");
    const navbar = screen.getByLabelText("navbar");

    expect(navbar).toBeInTheDocument();
    expect(toggleButton).toBeInTheDocument();

    expect(navbar).toHaveClass("translate-x-0");

    await userEvents.click(toggleButton);
    expect(navbar).toHaveClass("-translate-x-58");

    await userEvents.click(toggleButton);
    expect(navbar).toHaveClass("translate-x-0");
  });

  it("toggle overlay visibility when button is clicked", async () => {
    const toggleButton = screen.getByLabelText("toggle-navbar");
    const overlay = screen.getByLabelText("overlay");

    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass("opacity-100");
    expect(toggleButton).toBeInTheDocument();

    await userEvents.click(toggleButton);
    expect(overlay).toHaveClass("opacity-0 invisible");

    await userEvents.click(toggleButton);
    expect(overlay).toHaveClass("opacity-100");
  });

  it("should close navbar when overlay is clicked", () => {
    const overlay = screen.getByLabelText("overlay");
    const navbar = screen.getByLabelText("navbar");

    userEvents.click(overlay);
    expect(navbar).toHaveClass("translate-x-0");
    expect(overlay).toHaveClass("opacity-100");
  });

  it("change active item when menu item is clicked", async () => {
    const homeItem = screen.getByText("Home");
    const popularItem = screen.getByText("Popular");

    expect(homeItem).toHaveClass("bg-gray-700");
    expect(homeItem).not.toHaveClass("hover:bg-gray-800/25");
    expect(popularItem).not.toHaveClass("bg-gray-700");
    expect(popularItem).toHaveClass("hover:bg-gray-800/25");

    await userEvents.click(popularItem);
    expect(homeItem).not.toHaveClass("bg-gray-700");
    expect(homeItem).toHaveClass("hover:bg-gray-800/25");
    expect(popularItem).toHaveClass("bg-gray-700");
    expect(popularItem).not.toHaveClass("hover:bg-gray-800/25");
  });

  it("toggle section expansion when section header is clicked", async () => {
    const customFeedsHeader = screen.getByText("CUSTOM FEEDS");

    expect(screen.queryByText("Feed 1")).not.toBeInTheDocument();

    await userEvents.click(customFeedsHeader);
    expect(screen.getByText("Feed 1")).toBeInTheDocument();

    await userEvents.click(customFeedsHeader);
    expect(screen.queryByText("Feed 1")).not.toBeInTheDocument();
  });

  it("should rendere all main sections", () => {
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Popular")).toBeInTheDocument();
    expect(screen.getByText("Explore")).toBeInTheDocument();
    expect(screen.getByLabelText("All")).toBeInTheDocument();
    expect(screen.getByText("CUSTOM FEEDS")).toBeInTheDocument();
    expect(screen.getByText("RECENT")).toBeInTheDocument();
    expect(screen.getByText("COMMUNITIES")).toBeInTheDocument();
    expect(screen.getByText("RESOURCES")).toBeInTheDocument();
  });

  it("change toggle button icon based on navbar state", async () => {
    const toggleButton = screen.getByLabelText("toggle-navbar");

    expect(screen.getByLabelText("BiChevronLeftCircle")).toBeInTheDocument();

    await userEvents.click(toggleButton);
    expect(screen.getByLabelText("BiMenu")).toBeInTheDocument();

    await userEvents.click(toggleButton);
    expect(screen.getByLabelText("BiChevronLeftCircle")).toBeInTheDocument();
  });
});
