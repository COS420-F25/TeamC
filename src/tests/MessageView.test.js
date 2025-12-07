import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MessageView } from "../features/MessageView";
import { db } from "../firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";

// We are going to use a real document in the Messages collection
const MESSAGE_DOC_ID = "UYQjjSCcd701lndRTH8v";
const OTHER_USER = "OtherTestUser";

describe("MessageView", () => {

  test("renders loading initially", () => {
    render(<MessageView otherUser={OTHER_USER} />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
/*
  test("loads messages from Firestore", async () => {
    render(<MessageView otherUser={OTHER_USER} />);
    
    // Wait until loading finishes
    await waitFor(() => expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument());

    // Get Firestore data directly for comparison
    const docSnap = await getDoc(doc(db, "Messages", MESSAGE_DOC_ID));
    const messages = docSnap.data()?.Messages || [];

    // Check that messages from Firestore appear in the component
    messages.forEach(msg => {
      expect(screen.getByText("Test other user: Hello 2")).toBeInTheDocument();
      
    });
  });

  test("sends a new message", async () => {
    render(<MessageView otherUser={OTHER_USER} />);
    await waitFor(() => expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument());

    const input = screen.getByPlaceholderText(/Type your message/i);
    const button = screen.getByText("Send");

    // Type a new message
    fireEvent.change(input, { target: { value: "Hello Test" } });
    fireEvent.click(button);

    // Wait for message to appear in UI
    await waitFor(() => expect(screen.getByText("Hello Test")).toBeInTheDocument());

    // Optionally, clean up Firestore so this test is repeatable
    const docRef = doc(db, "Messages", MESSAGE_DOC_ID);
    const docSnap = await getDoc(docRef);
    const messages = docSnap.data()?.Messages || [];
    const newMessages = messages.filter(m => m.Text !== "Hello Test");
    await updateDoc(docRef, { Messages: newMessages });
  });
*/
});
