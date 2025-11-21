import {render, screen, fireEvent} from '@testing-library/react'
import {Settings} from './Settings';
//This will be where the settings will be tested

//
//Make a new branch for the features
//



    //first test that there is a settings button
    test('Render Settings Button', () => {
        render(<Settings/>);
        const settingsButton = screen.getByText(/settings/i);
        expect(settingsButton).toBeInTheDocument();
    });
    
    //text if the settings button can be pressed

    //check to see if the window appeared
    test('Check for Settings Window', () => {

        const btn = screen.getByRole('button', {name: /settings/i});
        fireEvent.click(btn);

        const window = screen.getByTestId('settings-window');
        expect(window).toBeVisible();
    });

    //test that modetoggle is on the page
    test('modetoggle is here', () => {
        render(<Settings/>);
        const checkboxCheck = screen.getByText(/Toggle Mode/i);
        expect(checkboxCheck).toBeInTheDocument();
    })

  


    //check to see that the font size works
