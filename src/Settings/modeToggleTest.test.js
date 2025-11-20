import { render, screen, fireEvent } from '@testing-library/react';
import modeToggle from './modeToggle';
describe('modeToggle Component tests', () => {
    beforeEach(()=> render(<modeToggle/>));
//the checkbox is displayed
    test('Checkbox Displayed', () => {
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).toBeInTheDocument();
        
    });
    //test that it is not toggled when initialized
test('Appears unchecked', () =>{
    const checkbox = screen.getAllByRole('checkbox')
    expect(checkbox).not.toBeChecked();
})

    //test that checkbox toggled
    test('Checkbox Toggled', () => {
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
    })
    test('Clicking checkbox twice unchecks box', () => {
        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(checkbox).not.toBeChecked();
    })

    //test that darkmode works
    // test('darkmode is toggled when box is checked', () => {

    // })

});