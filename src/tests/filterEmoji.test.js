import emojiList from "../emojiList.json";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EmojiResults from "../EmojiResults";
import filterEmoji from "../filterEmoji";

describe("are filtered emojis rendered correctly", () => {
  let searchText, maxResults;
  let filteredEmojis;

  beforeEach(() => {
    searchText = "smile";
    maxResults = 20;
    //rendering emojiresults with a specific searcText and a limiting result number
    render(<EmojiResults emojiData={filterEmoji(searchText, maxResults)} />);
  });

  test("are filtered emojis correctly rendered ", () => {
    // using the same filtering logic to obtain the filtered emoji list.
    filteredEmojis = emojiList
      .filter((emoji) => {
        if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
          return true;
        }
        if (emoji.keywords.includes(searchText)) {
          return true;
        }
        return false;
      })
      .slice(0, maxResults)
      .forEach((emoji) => {
        // every emoji item is using its title as an "alt" text value therefore searching
        // takes place acccording to "alt" text value of img items in the document.
        //if all the filtered emojis are in the document then it means the filtering functionality works well.
        const emojiLogo = screen.getByAltText(emoji.title);
        expect(emojiLogo).toBeInTheDocument();
      });
  });
});
