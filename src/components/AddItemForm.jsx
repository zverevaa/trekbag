import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
    const [itemText, setItemText] = useState("");
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!itemText) {
            inputRef.current.focus();
            return;
        }
        onAddItem(itemText);
        setItemText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add an item</h2>
            <input
                ref={inputRef}
                value={itemText}
                onChange={(e) => setItemText(e.target.value)}
                autoFocus={true}
            />
            <Button>Add to list</Button>
        </form>
    );
}
