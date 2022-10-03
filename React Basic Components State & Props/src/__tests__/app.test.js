import {
  cleanup,
  fireEvent,
  render,
  waitFor,
  screen,
} from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";

import Heading from "../Components/Heading";
import Image from "../Components/Image";
import PlayPause from "../Components/PlayPause";

// Do not change anything in the file
// We will be overrdiing this file while running our tests
// ensure you are submitting your entire project

beforeAll(() => {
  global.score = 1;
  console.log("Score rest to 1");
});

describe("Component", () => {
  test("Heading file, contains Masai School as the title with h1 tag", () => {
    expect(Heading).toBeDefined();
    render(<Heading />);
    const header = screen.getByRole("heading");
    expect(header.tagName).toBe("H1");
    expect(header.textContent.trim().toLowerCase()).toMatch(/Masai School/i);
    global.score += 1;
  });
});

describe("Image Component", () => {
  test("Image component accepts props", () => {
    expect(Image).toBeDefined();
    const props = {
      width: "100px",
      height: "100px",
      src: "image",
      alt: "icon",
      title: "title 1",
    };
    render(React.createElement(Image, props));
    const image = screen.getByRole("img");
    const title = screen.getByRole("heading");
    expect(image.getAttribute("alt")).toBe(props.alt);
    expect(image.getAttribute("src")).toBe(props.src);
    expect(image.getAttribute("width")).toBe(props.width);
    expect(image.getAttribute("height")).toBe(props.height);
    expect(title.textContent.trim().toLowerCase()).toBe(props.title);
    global.score += 1;
  });
  test("Image component accepts props 2", () => {
    const props = {
      width: "200px",
      height: "200px",
      src: "image2",
      alt: "avatar",
      title: "title 2",
    };
    render(React.createElement(Image, props));
    const image = screen.getByRole("img");
    const title = screen.getByRole("heading");
    expect(image.getAttribute("alt")).toBe(props.alt);
    expect(image.getAttribute("src")).toBe(props.src);
    expect(image.getAttribute("width")).toBe(props.width);
    expect(image.getAttribute("height")).toBe(props.height);
    expect(title.textContent.trim().toLowerCase()).toBe(props.title);
    global.score += 2;
  });
});

describe("PlayPause works correctly", () => {
  test("PlayPause", async () => {
    expect(PlayPause).toBeDefined();
    render(<PlayPause />);
    const heading = screen.getByRole("heading");
    const button = screen.getByRole("button");
    expect(heading).toBeDefined();
    expect(button).toBeDefined();
    global.score += 1;
  });
  test("PlayPause", async () => {
    expect(PlayPause).toBeDefined();
    render(<PlayPause />);
    const heading = screen.getByRole("heading");
    const button = screen.getByRole("button");

    expect(heading.textContent.trim().toLowerCase()).toBe(
      "the state is paused"
    );
    expect(button.textContent.trim().toLowerCase()).toBe("paused");

    await act(() => {
      fireEvent.click(button);
    });

    expect(heading.textContent.trim().toLowerCase()).toBe(
      "the state is playing"
    );
    expect(button.textContent.trim().toLowerCase()).toBe("playing");
    global.score += 4
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
