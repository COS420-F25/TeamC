import { render, screen, fireEvent } from "@testing-library/react";
import SettingsDialog from "./SettingsDialog";

describe("SettingsDialog", () => {

  const defaultValue = { pushNotif: false };

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

  test("checkbox reflects default setting", () => {
    setup();
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.checked).toBe(false);
  });

  test("checkbox toggles value", () => {
    setup();
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });

  test("Apply calls onConfirm with updated settings", () => {
    const onConfirm = jest.fn();
    setup({ onConfirm });
    //This toggles trhe checkbox
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    fireEvent.click(screen.getByRole("button", { name: /apply/i }));

    expect(onConfirm).toHaveBeenCalledWith({ pushNotif: true });
  });

  test("Discard calls onClose and resets state", () => {
    const onClose = jest.fn();
    setup({ onClose });

    const checkbox = screen.getByRole("checkbox");

    //Changes the state of the box
        fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);

   
    fireEvent.click(screen.getByRole("button", { name: /discard/i }));

    expect(onClose).toHaveBeenCalled();

    setup({ onClose });

    const newCheckbox = screen.getByRole("checkbox");
    expect(newCheckbox.checked).toBe(false);
  });

});