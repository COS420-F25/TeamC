import { render, screen, fireEvent } from '@testing-library/react';

describe('Describe modeToggle Component tests', () => {

//the initial value is lightmode
    test('Check for light mode default', () => {
        fireEvent.click(screen.getByRole("checkbox"))

        const toggle = screen.getByTestId('mode-toggle');
        expect(toggle).not.toBeChecked();
    });
    //test that button changed to true

    //test that darkmode works


});