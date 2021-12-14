import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Display from './../Display';


test('renders without errors with no props', ()=>{
    render(<Display show={null}/>);
});

test('renders Show component when the button is clicked ', ()=>{
    render(<Display />); 

    const loadingMessage = screen.queryByText(/Press to Get Show Data/i);
    const button = screen.queryByRole('button');

    expect(loadingMessage).toBeInTheDocument();
    expect(button).toBeInTheDocument();
});

test('renders show season options matching your data when the button is clicked', ()=>{});
