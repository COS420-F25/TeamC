import {render, screen, fireEvent} from '@testing-library/react'
import Settings from './Settings';
//This will be where the settings will be tested


//describe('Settings Component', () => {


//     //first test that there is a settings button
//     test('Render Settings Button', () => {
//         render(<Settings/>);
//         const btn = screen.getByRole('button', {name: /settings/i});
//         expect(btn).toBeInTheDocument();
//     });
    
//     //text if the settings button can be pressed

//     //check to see if the window appeared
//     test('Check for Settings Window', () => {
//         render(<Settings/>);
//         const btn = screen.getByRole('button', {name: /settings/i});
//         fireEvent.click(btn);

//         const window = screen.getByTestId('settings-window');
//         expect(window).toBeVisible();
//     });

//     //check to see if light/darkmode toggle appears
//     // test('Check for Mode toggle', () => {

//     // });

//     //the initial value is lightmode
//     test('Check for light mode default', () => {
//         render(<Settings/>);
//         fireEvent.click(screen.getByRole('button', {name: /settings/i}))

//         const toggle = screen.getByTestId('mode-toggle');
//         expect(toggle).not.toBeChecked();
//     });


//     //check to see that the font size works
// });