import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Show from './../Show';

test('renders without errors', ()=>{
    render(<Show/>);
});

test('renders Loading component when prop show is null', () => {
    //Arrange: 
    render(<Show show={null} />);
    //Act: 
    const loading = screen.queryByText(/Fetching data.../i)
    //Assert:
    expect(loading).toBeTruthy();
    expect(loading).toBeInTheDocument();
    expect(loading).toHaveTextContent(/Fetching data.../i);

});

const testShow = {
        image: {},
        name: "",
        seasons: [
            {
                id:1,
                name: 'Season 1',
                episodes: []
            },
            {
                id:2,
                name: 'Season 1',
                episodes: []
            },
            {
                id:3,
                name: 'Season 1',
                episodes: []
            },
        ],
        summary:""
    }

test('renders same number of options seasons are passed in', ()=>{
    render(<Show show={testShow} selectedSeason={"none"} />);

    const seasons = screen.queryAllByTestId("season-option")
    // console.log("Show seasons ", seasons)
    expect(seasons).toHaveLength(3)
    

});

test('handleSelect is called when an season is selected', () => {
    const handleSelectMock = jest.fn();
    render(<Show show={testShow} selectedSeason={"none"} handleSelect={handleSelectMock}/>);
    //Act: Find our button. Press our button.
    // const button = screen.queryByRole("button");
    const select = screen.queryByLabelText('Select A Season');
    // userEvent.click(button);
    userEvent.selectOptions(select, ['1']);
    console.log("#3 ", handleSelectMock.mock)
    expect(handleSelectMock).toBeCalled();
});

test('component renders when no seasons are selected and when rerenders with a season passed in', () => {});
