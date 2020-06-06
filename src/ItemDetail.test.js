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


// MOCKS
//jest.mock("./Api");


// TEARDOWN
afterEach(cleanup);

describe("<ItemDetail>", () => {
    it('should renders without crashing', () => {
        renderComponent();
    });
    // it('returns the title of the first post', async () => {
    //     const title = await fetchItem(); 
    //     expect(title).toEqual('quidem molestiae enim'); 
    //     });
    });

