import {render,screen,fireEvent} from '@testing-library/react';
import { QuestionsPage } from './QuestionsPage';
import React, {act} from "react";

describe("Question Posting",()=>{
    beforeEach(()=>{
        render(<QuestionsPage></QuestionsPage>);
    });

    test("Input section present",()=>{
        const textbox = screen.getByPlaceholderText(/...?/i);
        expect(textbox).toBeInTheDocument();
    })

    test("text can be saved",async ()=>{
        const textbox = screen.getByPlaceholderText(/...?/i);
        const sendButton = screen.getByRole("button",{name:/Send/i});
        const userInput = "testing message function";
        await act(async ()=>{
            fireEvent.change(textbox,{
                target:{value: userInput}
            });
        });
        await act(async ()=>{
            sendButton.click();
        });
        expect(screen.getByText(userInput)).toBeInTheDocument();
    });
    
});