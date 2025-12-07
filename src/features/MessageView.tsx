import React, { useEffect, useState } from "react";
import { 
    collection, where, query, getDocs, updateDoc, doc, arrayUnion 
} from "firebase/firestore";
import { db, auth } from "../firebase-config.js";
import { Message } from "../Message";

export function MessageView({ otherUser }: { otherUser: string }) {

    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);
    const [newMessage, setNewMessage] = useState("");

    const [messageDocId, setMessageDocId] = useState<string | null>(null);
    const currentUser = auth.currentUser?.email || "User";

    useEffect(() => {

        async function loadMessages() {
            const q = query(
                collection(db, "Messages"),
                where("Users", "array-contains", otherUser)
            );

            const snap = await getDocs(q);

            let collected: Message[] = [];
            let docId: string | null = null;

            snap.forEach(docSnap => {
                const data = docSnap.data();
                docId = docSnap.id;

                if (Array.isArray(data.Messages)) {
                    collected = [...collected, ...data.Messages];
                }
            });

            setMessageDocId(docId);
            setMessages(collected);
            setLoading(false);
        }

        loadMessages();
    }, [otherUser]);

    // --- SEND MESSAGE ---
    async function handleSend() {
        if (!newMessage.trim() || !messageDocId) return;

        const msg: Message = {
            User: currentUser,
            Text: newMessage,
            Time: new Date().toISOString()
        };

        // Update Firestore
        const ref = doc(db, "Messages", messageDocId);
        await updateDoc(ref, {
            Messages: arrayUnion(msg)
        });

        // Update local UI immediately
        setMessages(prev => [...prev, msg]);
        setNewMessage("");
    }

    if (loading) return <div>Loading...</div>;

    return (
        <div style={{ padding: "10px" }}>
            {messages.map((msg, idx) => (
                <div key={idx} style={{ marginBottom: "6px" }}>
                    <strong>{msg.User}</strong>: {msg.Text}
                    <div style={{ fontSize: "11px", opacity: 0.7 }}>
                        {msg.Time}
                    </div>
                </div>
            ))}

            {/* --- Textbox + Send Button --- */}
            <div style={{ marginTop: "20px" }}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    style={{
                        padding: "8px",
                        width: "70%",
                        marginRight: "5px"
                    }}
                />
                <button onClick={handleSend}>
                    Send
                </button>
            </div>
        </div>
    );
}
