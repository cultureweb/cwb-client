import React from 'react';
import { render } from "@testing-library/react";
import App from './App';

function renderComponent() {
  return render(
    <App />
  );
}

describe("<App>", () => {
  it('should renders without crashing', () => {
    renderComponent();
  });
});