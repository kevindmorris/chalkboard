import { Form, Layout, List, ListItem } from "@/components";
import { Note } from "@/types";
import React from "react";

export default function App() {
  const [notes, setNotes] = React.useState<Note[]>([]);
  const [value, setValue] = React.useState<string>("");

  const getNotes = async () => {
    try {
      const response = await fetch("/api/notes", {
        method: "GET",
      });
      const result = await response.json();
      setNotes(result);
    } catch (error) {
      console.log(error);
    }
  };

  const createNote: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    if (value.length === 0) return;

    try {
      const response = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: value }),
      });
      const result = await response.json();
      setNotes([...notes, result]);
    } catch (error) {
      console.log(error);
    } finally {
      setValue("");
    }
  };

  const deleteNote = async (id: string) => {
    try {
      await fetch(`/api/notes/${id}`, {
        method: "DELETE",
      });
      setNotes(notes.filter((e) => e._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const updateNote = (id: string, newValue: string) => {
    setNotes(notes.map((e) => (e._id === id ? { ...e, value: newValue } : e)));
  };

  React.useEffect(() => {
    getNotes();
  }, []);

  return (
    <Layout>
      <Form value={value} setValue={setValue} onSubmit={createNote} />
      <List>
        {notes.map((e) => (
          <ListItem
            key={e._id}
            note={e}
            onDelete={deleteNote}
            onUpdate={updateNote}
          />
        ))}
      </List>
    </Layout>
  );
}
