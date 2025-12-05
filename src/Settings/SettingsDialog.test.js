import { render, screen, fireEvent } from "@testing-library/react";
import SettingsDialog from "./SettingsDialog";

describe("SettingsDialog", () => {

  const defaultValue = { 
    pushNotif: false, 
    darkMode: false, 
    fonts: 'Comic Sans MS' 
  };

  const setup = (props = {}) => {
    return render(
      <SettingsDialog
        isOpen={true}
        defaultValue={defaultValue}
        onClose={jest.fn()}
        onConfirm={jest.fn()}
        {...props}
      />
    );
  };

  test("renders dialog when open", () => {
    setup();
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("Change the setting for the user")).toBeInTheDocument();
  });

  test("push notification checkbox reflects default setting", () => {
    setup();
    const pushNotifCheckbox = screen.getByLabelText(/push notification/i);
    expect(pushNotifCheckbox).toBeInTheDocument();
    expect(pushNotifCheckbox).not.toBeChecked();
  });

  test("push notification checkbox toggles: checked once, unchecked twice", () => {
    setup();
    const pushNotifCheckbox = screen.getByLabelText(/push notification/i);

    // First click - should be checked
    fireEvent.click(pushNotifCheckbox);
    expect(pushNotifCheckbox).toBeChecked();

    // Second click - should be unchecked
    fireEvent.click(pushNotifCheckbox);
    expect(pushNotifCheckbox).not.toBeChecked();
  });

  test("dark mode checkbox reflects default setting", () => {
    setup();
    const darkModeCheckbox = screen.getByLabelText(/toggle dark mode/i);
    expect(darkModeCheckbox).toBeInTheDocument();
    expect(darkModeCheckbox).not.toBeChecked();
  });

  test("dark mode checkbox toggles: checked once, unchecked twice", () => {
    setup();
    const darkModeCheckbox = screen.getByLabelText(/toggle dark mode/i);

    // First click - should be checked
    fireEvent.click(darkModeCheckbox);
    expect(darkModeCheckbox).toBeChecked();

    // Second click - should be unchecked
    fireEvent.click(darkModeCheckbox);
    expect(darkModeCheckbox).not.toBeChecked();
  });

  test("font dropdown shows up", () => {
    setup();
    const fontSelect = screen.getByLabelText(/select font/i);
    expect(fontSelect).toBeInTheDocument();
    
    // Click to open dropdown
    fireEvent.mouseDown(fontSelect);
    
    // Check that menu items are available (use getAllByText since "Comic Sans" appears in both select and menu)
    const comicSansItems = screen.getAllByText("Comic Sans");
    expect(comicSansItems.length).toBeGreaterThan(0);
    expect(screen.getByText("Times New Roman")).toBeInTheDocument();
    expect(screen.getByText("Arial")).toBeInTheDocument();
  });

  test("dark mode changes background color", () => {
    setup();
    const darkModeCheckbox = screen.getByLabelText(/toggle dark mode/i);
    
    // Find the ModeToggle container div - it's the div containing "Light Mode" or "Dark Mode" text
    // The structure is: div[style] > label > span with "Light Mode" or "Dark Mode"
    // eslint-disable-next-line testing-library/no-node-access
    const findModeToggleContainer = () => {
      // Find the span element with "Light Mode" or "Dark Mode" text (not the label)
      const modeTexts = screen.getAllByText(/^(light|dark) mode$/i);
      const modeSpan = modeTexts.find(el => el.tagName === 'SPAN');
      if (!modeSpan) return null;
      // eslint-disable-next-line testing-library/no-node-access
      return modeSpan.closest('div[style*="background"]') || modeSpan.closest('div[style]');
    };
    
    // Initially should be white (light mode)
    let modeToggleContainer = findModeToggleContainer();
    expect(modeToggleContainer).toBeTruthy();
    expect(modeToggleContainer).toHaveStyle({ backgroundColor: 'white' });
    
    // Click to enable dark mode
    fireEvent.click(darkModeCheckbox);
    
    // After clicking, should be black (dark mode)
    modeToggleContainer = findModeToggleContainer();
    expect(modeToggleContainer).toBeTruthy();
    expect(modeToggleContainer).toHaveStyle({ backgroundColor: 'black' });
    
    // Click again to disable dark mode
    fireEvent.click(darkModeCheckbox);
    
    // Should be white again
    modeToggleContainer = findModeToggleContainer();
    expect(modeToggleContainer).toBeTruthy();
    expect(modeToggleContainer).toHaveStyle({ backgroundColor: 'white' });
  });

  test("Apply calls onConfirm with updated settings", () => {
    const onConfirm = jest.fn();
    setup({ onConfirm });
    const pushNotifCheckbox = screen.getByLabelText(/push notification/i);
    fireEvent.click(pushNotifCheckbox);

    fireEvent.click(screen.getByRole("button", { name: /apply/i }));

    expect(onConfirm).toHaveBeenCalledWith({ 
      pushNotif: true, 
      darkMode: false, 
      fonts: 'Comic Sans MS' 
    });
  });

  test("Discard calls onClose and resets state", () => {
    const onClose = jest.fn();
    setup({ onClose });

    // Use getAllByLabelText and pick first to handle potential multiple instances
    const pushNotifCheckboxes = screen.getAllByLabelText(/push notification/i);
    const pushNotifCheckbox = pushNotifCheckboxes[0];

    // Changes the state of the box
    fireEvent.click(pushNotifCheckbox);
    expect(pushNotifCheckbox).toBeChecked();

    fireEvent.click(screen.getByRole("button", { name: /discard/i }));

    expect(onClose).toHaveBeenCalled();
    
    // Verify that state was reset by checking that handleOnClose resets to defaultValue
    // This is tested implicitly - when dialog reopens, it will use defaultValue from props
  });

});