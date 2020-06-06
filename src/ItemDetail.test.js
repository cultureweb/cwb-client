import React from 'react';
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ItemDetail from './ItemDetail';

const renderComponent = (props = {}) =>
    render(
        <BrowserRouter>
            <ItemDetail {...props} />
        </BrowserRouter>
    );
$.fn.modal = jest.fn();

// MOCKS
//jest.mock("./Api");


// TEARDOWN
afterEach(cleanup);

describe("<ItemDetail>", () => {
    it('should renders without crashing', () => {
        renderComponent();
    });
});
