import { Note } from "@/types";
import React from "react";

export default function ListItem({
  note,
  onDelete,
  onUpdate,
}: {
  note: Note;
  onDelete: (id: string) => Promise<void>;
  onUpdate: (id: string, newValue: string) => void;
}) {
  const [edit, setEdit] = React.useState<boolean>(false);
  const [newValue, setNewValue] = React.useState<string>(note.value);

  const updateNote: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/notes/${note._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: newValue }),
      });
      const result = await response.json();
      onUpdate(result._id, result.value);
    } catch (error) {
      console.log(error);
    } finally {
      setEdit(false);
    }
  };

  if (edit)
    return (
      <form
        className="list-group-item d-flex justify-content-between align-items-center gap-1"
        onSubmit={updateNote}
      >
        <input
          className="form-control me-auto"
          autoFocus
          autoComplete="off"
          value={newValue}
          onChange={(event) => {
            setNewValue(event.target.value);
          }}
        />
        <button
          className="btn btn-secondary badge rounded-pill ms-1"
          type="button"
          onClick={() => {
            setNewValue(note.value);
            setEdit(false);
          }}
        >
          Cancel
        </button>
        <button className="btn btn-success badge rounded-pill" type="submit">
          Submit
        </button>
      </form>
    );

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center gap-1">
      <span className="me-auto text-wrap text-break">{note.value}</span>
      <button
        className="btn btn-warning badge rounded-pill"
        onClick={() => setEdit(true)}
      >
        Edit
      </button>
      <button
        className="btn btn-danger badge rounded-pill"
        onClick={() => onDelete(note._id)}
      >
        X
      </button>
    </li>
  );
}
