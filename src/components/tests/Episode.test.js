import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';


test("renders without error", () => {
    render(<Episode episode={[]}/>);
});

test("renders the summary test passed as prop", ()=>{
    //Arrange 1
    const { rerender } = render(<Episode episode={[]}/>);
    // console.log(rerender)
    //Act 1
    // episodes-container
    let episodes = screen.queryAllByTestId('episodes-container');
    //Assert 1
    expect(episodes).toHaveLength(0);



        //Arrange 2
        rerender(<Episode episode={
            {id:1,name: "",image: null,season: 1,number: 1,summary: "Chapter One",runtime: 1}
        }/>)
    
        //Act 3
        // episodes = screen.queryAllByTestId('episodes-container');
        const summary = screen.queryByText(/Chapter One/i);
        console.log("summary", summary)
        //Assert 3
        expect(summary).toBeInTheDocument();
        expect(summary).toHaveTextContent(/Chapter One/i);
      
});

test("renders default image when image is not defined", ()=>{

});
