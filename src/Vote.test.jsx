import React from "react";
import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Vote } from "./Vote";
// import { jest } from "@jest/globals";

// @testing-library/react -> DOM testing
// react-test-renderer -> snapshot testing

afterEach(() => {
  cleanup();
});

describe("Vote", () => {
  test("Should have 0 vote count", () => {
    const { getByText } = render(<Vote />);
    expect(getByText("0")).toBeTruthy();
  });

  test("Should increment the vote count", async () => {
    const { getByRole, getByText } = render(<Vote />);
    expect(getByText("0")).toBeTruthy();
    const user = userEvent.setup({ document });

    await user.click(getByRole("button", { name: /upvote/i }));
    expect(getByText("1")).toBeTruthy();
  });

  test("Should decrement the vote count", async () => {
    const { getByRole, getByText } = render(<Vote />);
    expect(getByText("0")).toBeTruthy();
    const user = userEvent.setup({ document });

    await user.click(getByRole("button", { name: /downvote/i }));
    expect(getByText("-1")).toBeTruthy();
  });
});
