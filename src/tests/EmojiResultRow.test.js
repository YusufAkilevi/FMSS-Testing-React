import emojiList from "../emojiList.json";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import filterEmoji from "../filterEmoji";
import EmojiResults from "../EmojiResults";

describe("is clicked emoji copied ", () => {
  let sampleEmoji;
  let input;

  beforeEach(() => {
    render(<App />);
    //choosing a random emoji to use later
    sampleEmoji = screen.getByText("100");
    input = screen.getByPlaceholderText("search emoji");
  });
  test("is clicked emoji copied", () => {
    fireEvent.click(sampleEmoji);

    expect(
      sampleEmoji.parentElement.getAttribute("data-clipboard-text")
    ).toEqual("💯");
  });
});
