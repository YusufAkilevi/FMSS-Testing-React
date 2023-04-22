import emojiList from "../emojiList.json";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmojiResults from "../EmojiResults";

describe("when the app is opened, is emoji list rendered or not ", () => {
  beforeEach(() => {
    // rendering emoji list using a specific emoji list part
    render(<EmojiResults emojiData={emojiList.slice(0, 20)} />);
  });

  test("is emoji results rendered", () => {
    emojiList.slice(0, 20).forEach((emoji) => {
      // getting the emoji items according to their alt text attributes
      const emojiLogo = screen.getByAltText(emoji.title);
      // if they are in the document it means rendering is successfull
      expect(emojiLogo).toBeInTheDocument();
    });
  });
});
