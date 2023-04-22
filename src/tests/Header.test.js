import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import ReactDOM from "react-dom";
import Header from "../Header";

describe("Header rendering test", () => {
  let header;
  // Before each test header component is rendered and assigned to header variable.
  beforeEach(() => {
    render(<Header />);

    header = screen.getByText("Emoji Search");
  });
  // The test is checking whether Header component is rendered or not.
  test("is header rendered", () => {
    // After rendering the header, header element needs to be selected and assigned to a variable in order to be compared later.
    const item = screen.getByText("Emoji Search");
    //Comparing the selected element and the rendered header element.
    expect(item).toEqual(header);
  });
});
