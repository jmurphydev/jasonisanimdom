import { render } from "@testing-library/react";
import Drum from "./App";
import React from 'react';
import { JSDOM } from 'jsdom';

const dom = new JSDOM('<!DOCTYPE html>');
global.document = dom.window.document;
global.window = dom.window;

describe("Drum component", () => {
  it("renders all functional keys", () => {
    render(<Drum />);

    expect(document.querySelector(".key-container").children.length).toBe(8);
  });
});